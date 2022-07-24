import { HttpRequest } from "@aws-sdk/protocol-http"
import { S3RequestPresigner } from "@aws-sdk/s3-request-presigner"
import { parseUrl } from "@aws-sdk/url-parser"
import { Hash } from "@aws-sdk/hash-node"
import { formatUrl } from "@aws-sdk/util-format-url"
import { ForbiddenException, NotFoundException } from "@nestjs/common"
import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { Roles } from "src/common/decorators/roles.decorator";
import { ERole } from "src/users/entities/user.entity";
import { TasksService } from "src/tasks/tasks.service"
import { AttachmentsService } from "src/attachments/attachments.service"
import { CurrentUser } from "src/common/decorators/currentUser.decorator"
import { TCurrentUser } from "src/authentication/jwt.strategy"

const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_ACCESS_SECRET_ACCESS_KEY
const bucketUrl = process.env.AWS_S3_BUCKET_URL

// TODO:
// - account for file type (allow pdf and images)
// - optimize images (resize, compress, etc.)
@Resolver(of => String)
export class FilesResolver {
  presigner: S3RequestPresigner

  constructor(
    private readonly tasksService: TasksService,
    private readonly attachmentsService: AttachmentsService,
  ) {
    this.presigner = new S3RequestPresigner({
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
      region: "eu-central-1",
      sha256: Hash.bind(null, "sha256"),
    })
  }

  @Roles(ERole.USER)
  @Mutation(() => String, { description: 'Generate signed URL for uploading to S3 bucket' })
  async getUrlForTaskAttachmentUpload(
    @Args("taskId") taskId: number,
    @Args("fileName") fileName: string
  ) {
    const task = await this.tasksService.findOneById(taskId)
    if (!task) {
      throw new NotFoundException(`Task #${taskId} doesn't exist.`)
    }

    const s3ObjectUrl = parseUrl(`${bucketUrl}/tasks/${taskId}/attachments/${fileName}`)
    const signedUrl = await this.presigner.presign(
      new HttpRequest({ ...s3ObjectUrl, method: "PUT" })
    )
    return formatUrl(signedUrl)
  }

  @Roles(ERole.USER)
  @Mutation(() => [String], { description: 'Generate signed URL for obtaining attachment from S3 bucket' })
  async getTaskAttachmentUrls(
    @Args("taskId") taskId: number,
    @CurrentUser() currentUser: TCurrentUser,
  ) {
    const task = await this.tasksService.findOneById(taskId)
    if (!task) {
      throw new NotFoundException(`Task #${taskId} doesn't exist.`)
    }
    if (!currentUser.isAdmin && task.userId !== currentUser.id) {
      throw new ForbiddenException(`You are not allowed to access attachments of task #${taskId}.`)
    }

    const attachments = await this.attachmentsService.findAll({
      where: {
        taskId,
      }
    })

    const signedAttachmentUrlsPromises = attachments.map(({ s3Key }) => {
      const s3ObjectUrl = parseUrl(`${bucketUrl}/${s3Key}`)
      return this.presigner.presign(new HttpRequest(s3ObjectUrl))
    })
    const signedAttachmentUrls = await Promise.all(signedAttachmentUrlsPromises)
    const signedAttachmentUrlStrings = signedAttachmentUrls.map(formatUrl)
    return signedAttachmentUrlStrings
  }
}
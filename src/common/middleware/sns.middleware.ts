import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AttachmentsService } from "src/attachments/attachments.service";

type TMessage = {
  Records: Array<{
    s3: {
      object: {
        key: string;
      }
    }
  }>
}

@Injectable()
export class SNSMiddleware implements NestMiddleware {
  constructor(
    private readonly attachmentsService: AttachmentsService
  ) { }
  use(req: Request, res: Response, next: NextFunction) {
    const body = JSON.parse(req.body)
    if (req.headers['x-amz-sns-message-type'] === 'SubscriptionConfirmation') {
      try {
        fetch(body.SubscribeURL)
      } catch (error) {
        console.log(`SNS subscription confirmation failed`, error)
      }
    }
    if (req.headers['x-amz-sns-message-type'] === 'Notification') {
      console.log(`Headers:`, req.headers)
      const body = JSON.parse(req.body)
      console.log(`Body:`, body)
      const message = JSON.parse(body.Message) as TMessage
      console.log(`Message:`, body)

      message.Records.forEach(({ s3 }) => {
        // Example path: "tasks/2/attachments/testik.txt"
        const path = s3.object.key
        const pathSegments = path.split('/')
        const taskId = Number(pathSegments[1])

        this.attachmentsService.create({
          taskId,
          data: {
            s3Key: path
          },
        })
      })
    }

    res.end()
  }
}

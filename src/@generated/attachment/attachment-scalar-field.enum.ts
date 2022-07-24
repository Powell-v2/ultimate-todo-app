import { registerEnumType } from '@nestjs/graphql';

export enum AttachmentScalarFieldEnum {
    id = "id",
    s3Key = "s3Key",
    taskId = "taskId",
    createdAt = "createdAt"
}


registerEnumType(AttachmentScalarFieldEnum, { name: 'AttachmentScalarFieldEnum', description: undefined })

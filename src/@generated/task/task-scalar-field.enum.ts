import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    priority = "priority",
    dueDate = "dueDate",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })

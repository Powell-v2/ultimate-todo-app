import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    priority = "priority",
    dueDate = "dueDate",
    createdAt = "createdAt",
    userId = "userId"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })

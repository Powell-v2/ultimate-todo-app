import { registerEnumType } from '@nestjs/graphql';

export enum SubtaskScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    priority = "priority",
    dueDate = "dueDate",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    taskId = "taskId"
}


registerEnumType(SubtaskScalarFieldEnum, { name: 'SubtaskScalarFieldEnum', description: undefined })

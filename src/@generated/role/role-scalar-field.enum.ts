import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum', description: undefined })

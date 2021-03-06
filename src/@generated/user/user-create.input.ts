import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { RoleCreateNestedManyWithoutUserInput } from '../role/role-create-nested-many-without-user.input';
import { TaskCreateNestedManyWithoutUserInput } from '../task/task-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @HideField()
    refreshToken?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RoleCreateNestedManyWithoutUserInput, {nullable:true})
    roles?: RoleCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TaskCreateNestedManyWithoutUserInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutUserInput;
}

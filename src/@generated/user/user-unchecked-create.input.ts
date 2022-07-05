import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedManyWithoutUserInput } from '../task/task-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @HideField()
    refreshToken?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => TaskUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

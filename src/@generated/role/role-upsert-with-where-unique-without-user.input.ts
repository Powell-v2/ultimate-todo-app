import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutUserInput } from './role-update-without-user.input';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';

@InputType()
export class RoleUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutUserInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUserInput)
    update!: RoleUpdateWithoutUserInput;

    @Field(() => RoleCreateWithoutUserInput, {nullable:false})
    @Type(() => RoleCreateWithoutUserInput)
    create!: RoleCreateWithoutUserInput;
}

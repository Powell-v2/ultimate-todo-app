import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutUserInput } from './role-update-without-user.input';

@InputType()
export class RoleUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutUserInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUserInput)
    data!: RoleUpdateWithoutUserInput;
}

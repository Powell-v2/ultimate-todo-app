import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutUserInput } from './role-create-or-connect-without-user.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [RoleCreateWithoutUserInput], {nullable:true})
    @Type(() => RoleCreateWithoutUserInput)
    create?: Array<RoleCreateWithoutUserInput>;

    @Field(() => [RoleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUserInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Array<RoleWhereUniqueInput>;
}

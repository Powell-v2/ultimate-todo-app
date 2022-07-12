import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutUserInput } from './role-create-or-connect-without-user.input';
import { RoleUpsertWithWhereUniqueWithoutUserInput } from './role-upsert-with-where-unique-without-user.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithWhereUniqueWithoutUserInput } from './role-update-with-where-unique-without-user.input';
import { RoleUpdateManyWithWhereWithoutUserInput } from './role-update-many-with-where-without-user.input';
import { RoleScalarWhereInput } from './role-scalar-where.input';

@InputType()
export class RoleUpdateManyWithoutUserInput {

    @Field(() => [RoleCreateWithoutUserInput], {nullable:true})
    @Type(() => RoleCreateWithoutUserInput)
    create?: Array<RoleCreateWithoutUserInput>;

    @Field(() => [RoleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUserInput>;

    @Field(() => [RoleUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RoleUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    set?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    disconnect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    delete?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RoleUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RoleUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RoleUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RoleUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RoleUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    @Type(() => RoleScalarWhereInput)
    deleteMany?: Array<RoleScalarWhereInput>;
}

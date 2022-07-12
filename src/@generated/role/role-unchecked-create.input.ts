import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutRolesInput } from '../user/user-unchecked-create-nested-many-without-roles.input';

@InputType()
export class RoleUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutRolesInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutRolesInput;
}

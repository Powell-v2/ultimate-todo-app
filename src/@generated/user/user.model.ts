import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { Task } from '../task/task.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @HideField()
    refreshToken!: string | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Role], {nullable:true})
    roles?: Array<Role>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

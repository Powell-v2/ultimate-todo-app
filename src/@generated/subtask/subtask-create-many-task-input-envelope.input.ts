import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskCreateManyTaskInput } from './subtask-create-many-task.input';
import { Type } from 'class-transformer';

@InputType()
export class SubtaskCreateManyTaskInputEnvelope {

    @Field(() => [SubtaskCreateManyTaskInput], {nullable:false})
    @Type(() => SubtaskCreateManyTaskInput)
    data!: Array<SubtaskCreateManyTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

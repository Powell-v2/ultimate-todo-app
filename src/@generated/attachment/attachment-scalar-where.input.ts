import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AttachmentScalarWhereInput {

    @Field(() => [AttachmentScalarWhereInput], {nullable:true})
    AND?: Array<AttachmentScalarWhereInput>;

    @Field(() => [AttachmentScalarWhereInput], {nullable:true})
    OR?: Array<AttachmentScalarWhereInput>;

    @Field(() => [AttachmentScalarWhereInput], {nullable:true})
    NOT?: Array<AttachmentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    s3Key?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}

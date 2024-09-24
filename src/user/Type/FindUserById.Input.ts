import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FindUserByIdInput {
  @Field(type => String)
  id: string;
}

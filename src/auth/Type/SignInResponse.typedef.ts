import { ObjectType, Field } from '@nestjs/graphql';




@ObjectType()
export class SignInResponse {
  @Field(()=>String)
  accessToken: string;

  
}

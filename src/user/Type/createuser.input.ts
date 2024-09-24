import { Field, InputType } from "@nestjs/graphql";



@InputType()
export class UserInput{
    
    @Field(type=>String)
    readonly name : string

    @Field(type=>String)
    readonly email : string

    @Field(type=>String)
    readonly password: string

    
}
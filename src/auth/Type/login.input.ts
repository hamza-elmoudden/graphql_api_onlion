
import { Field, InputType, Int } from "@nestjs/graphql";


@InputType()
export class Logininput{
    
    @Field(type=>String)
    readonly email : string
    
    @Field(type=>String)
    readonly password: string
    
    
}
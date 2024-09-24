import { Field, InputType, Int } from "@nestjs/graphql";


@InputType()
export class CardInput{
    
    @Field(type=>String)
    readonly id : string   
    
}
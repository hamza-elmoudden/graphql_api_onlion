
import { Field, Int, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class Productstpye{
 
    @Field(type => String)
    readonly _id:string

    @Field(type=>String)
    readonly title:string

    @Field(type=>String)
    readonly descraption:string

    @Field(type=>String)
    readonly price:string


    @Field(type => [String])
    readonly color : [string]

    @Field(type=>String)
    readonly  image_one:string
    
    @Field(type=>String)
    readonly  image_tow:string


    @Field(type=>String)
    readonly  image_three:string

}
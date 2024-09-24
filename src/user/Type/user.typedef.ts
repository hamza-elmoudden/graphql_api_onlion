
import { Field, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class Usertpye{

    @Field(type=>String)
    readonly _id: string

    @Field(type=>String)
    readonly name : string

    @Field(type=>String)
    readonly email : string

    @Field(type=>String)
    readonly password: string


}
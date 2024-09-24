
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Productstpye } from "src/producte/Type/producte.typedef";



@ObjectType()
export class Cardtype{

    @Field(type => String)
    readonly _id:string

    @Field(type=>[Productstpye])
    list:Productstpye[]

}
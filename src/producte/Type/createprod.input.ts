import { Field, InputType, Int } from "@nestjs/graphql";
import * as Upload from "graphql-upload/Upload.js";
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';




@InputType()
export class PorductInput{
    
    @Field(type=>String)
    readonly title : string

    @Field(type=>String)
    readonly decription : string

    @Field(type=>String)
    readonly price:string

    // @Field(type => GraphQLUpload,{ nullable: true })
    // image_one?: Upload

    // @Field(type => GraphQLUpload,{ nullable: true })
    // image_two?: Upload

    // @Field(type => GraphQLUpload,{ nullable: true })
    // image_three?: Upload
    
    
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

@Prop({
    type:String,
    required:true,
    maxlength:200,
    minlength:2,
})
name: string;

@Prop({
        type:String,
        required:true,
        maxlength:200,
        minlength:2,
})
email: string;

 @Prop({
    type:String,
    required:true,
    maxlength:1024,
    minlength:8,
})
password:string;


}

export const Userchema = SchemaFactory.createForClass(User);


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProducteDocument = HydratedDocument<Producte>;

@Schema()
export class Producte {
  @Prop({
    type:String,
    required:true,
    maxlength:200,
    minlength:2,
  })
  title: string;

  @Prop({
        type:String,
        required:true,
        maxlength:200,
        minlength:2,
      })
  descraption: string;

  @Prop({
    type:String,
    required:true,
    maxlength:200,
    minlength:2,
  })
  price: string;

  @Prop({
    type:[String],
    maxlength:10,
    minlength:2
    
  })
  color:[string]

  @Prop({
    type:String,
    default:"Not Add",
    maxlength:1024,
    minlength:2,
  })
  image_one:string

  @Prop({
    type:String,
    default:"Not Add",
    maxlength:1024,
    minlength:2,
  })
  image_tow:string

  @Prop({
    type:String,
    default:"Not Add",
    maxlength:1024,
    minlength:2,
  })
  image_three:string

  _id: Types.ObjectId;
}

export const Productechema = SchemaFactory.createForClass(Producte);

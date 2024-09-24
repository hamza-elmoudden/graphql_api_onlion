import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument,Types } from 'mongoose';
import { Producte } from 'src/producte/Schema/prodcut.schema';
import { User } from 'src/user/Schema/user.schema';

export type CardDocument = HydratedDocument<Card>


@Schema()
export class Card{

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        autopopulate: true,
        trim:true,

    })
    owner:User

    @Prop([{
        type:mongoose.Schema.ObjectId,
        ref:"Producte",
        autopopulate: true,
        strictPopulate:false,
        trim:true
    }])
    list:Producte[]
}

export const CardSchema = SchemaFactory.createForClass(Card)
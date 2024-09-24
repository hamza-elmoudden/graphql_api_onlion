import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './Schema/card.schema';
import { Model, Types } from 'mongoose';
import { ProducteService } from 'src/producte/producte.service';

@Injectable()
export class CardService {
    constructor(
        @InjectModel(Card.name) private cardModel:Model<Card>,
        private readonly producteSerive:ProducteService
    ){}


    async Card(id:string,prod_id:string){
        try {
            let card = await this.cardModel.findOne({ owner: id });

            const prod = await this.producteSerive.FindProductebyid(prod_id)



            if(!prod){
                return false
            }

            if(!card){
              
              const card = new  this.cardModel({
                        owner:id,
                    })
                
                card.list.push(prod)
            }else{
                const find = card.list.filter(item => String(item._id) === prod_id)
                if(find.length === 0){
                    card.list.push(prod)
                }
            }
            
            
            await card.save()


            return card;
          } catch (error) {
            throw new Error(`Error: ${error}`);
          }
    }


    async GetCard(id:string){
            try {
                let card = await this.cardModel.findOne({ owner: id }).populate("list").exec()
                return card
            } catch (error) {
                throw new Error(`Error: ${error}`);
            }
    }

    async DeleteCard(id:string,prod_id:string){
        try {
            
            const card = await this.cardModel.findOne({
                "owner" :id
            })

            if(!card){
                return false
            }

            const prod = await this.producteSerive.FindProductebyid(prod_id)


            if(!prod){
                return false
            }

            card.list = [...card.list.filter((item)=> String(item._id) !== prod_id)]

            await card.save()

            return card
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }
}


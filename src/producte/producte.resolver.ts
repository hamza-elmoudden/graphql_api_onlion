import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Productstpye } from './Type/producte.typedef';
import { PorductInput } from './Type/createprod.input';
import { GraphQLError } from 'graphql';
import { ProducteService } from './producte.service';
import * as Upload from "graphql-upload/Upload.js";
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';



@Resolver()
export class ProducteResolver {
    constructor(
        private prodservie:ProducteService
    ){}

    @Query(()=>String)
    async Sayhi(){
        return "Hi You Strta Nestjs GraphQl Ok"
    }


    @Query(()=> [Productstpye])
    async Producte(){
        try {
            const prod = await this.prodservie.GetAllProducte()
            if(!prod){
                return {
                    error:"Producte Not Found",
                    status:404,
                }
            }

            return prod
        } catch (error) {
            throw new GraphQLError("Error In The Find Prodcute")
        }

    }

// @Mutation(()=>Productstpye)
// async AddProdcute(
//         @Args("prod") prod: PorductInput,
//         @Args({ name: 'image_one', type: () => GraphQLUpload }) image_one: Upload,
//         @Args({ name: 'image_two', type: () => GraphQLUpload }) image_two: Upload,
//         @Args({ name: 'image_three', type: () => GraphQLUpload }) image_three: Upload
//     ){
//         try {
            


//             image_one   = await this.prodservie.uplodeimage(image_one)
//             image_two   = await this.prodservie.uplodeimage(image_two)
//             image_three = await this.prodservie.uplodeimage(image_three)


//             const newprod = await this.prodservie.AddProducte(prod,image_one,image_two,image_three)

//             return newprod
            
//         } catch (error) {
//             throw new GraphQLError("Error in Add Producte")
//         }
// }

}

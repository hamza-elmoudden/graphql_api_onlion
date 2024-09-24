import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CardService } from './card.service';
import { GraphQLError } from 'graphql';
import { UseGuards } from '@nestjs/common';
import { Cardtype } from './Type/card.typedef';
import { CardInput } from './Type/addtocard.input';
import { AuthMiddleware } from 'src/auth/auth.middleware';


@Resolver()
export class CardResolver {
    constructor(private readonly cardService:CardService){}
    

    @Mutation(()=>Cardtype)
    @UseGuards(AuthMiddleware)
    async addtocard(
        @Args("id") id:CardInput,
        @Context() context: any
    ){
        try {
            

            const user = context.req.user

            const card =  await this.cardService.Card(user.id,id.id.trim())

            if(!card){
                throw new GraphQLError("Card Not Found")
            }

            return card

            
        } catch (error) {
            throw new GraphQLError("Error In Add Card")
        }
    }
    
    
    @Query(()=>Cardtype)
    @UseGuards(AuthMiddleware)
    async Getcard(@Context() context: any){
        try {
            const user = context.req.user

            if (!user) {
                throw new GraphQLError("User not authenticated");
            }
            const card =  await this.cardService.GetCard(user.id)
            
            if (!card) {
                throw new GraphQLError("Card not found");
            }

           return card
            
        } catch (error) {
            throw new GraphQLError("Error In The Card")
        }
    }

 


    @Mutation(()=>Cardtype)
    @UseGuards(AuthMiddleware)
    async Deletocard(
        @Args("id")id:CardInput, 
        @Context() context: any,
    ) {
        try {
            const user = context.req.user

            const card = await this.cardService.DeleteCard(user.id, id.id.trim());
    
            if (!card) {
                return {
                    error :"Card Not Found",
                    status: 404
                }
            }
    
            return card;
        } catch (error) {
            throw new GraphQLError("Error In Card")
        }
    }
}

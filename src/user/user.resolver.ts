import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Usertpye } from './Type/user.typedef';
import { GraphQLError } from 'graphql';
import { UserService } from './user.service';
import { UserInput } from './Type/createuser.input';
import { FindUserByIdInput } from './Type/FindUserById.Input';

@Resolver()
export class UserResolver {
    constructor(
            readonly  userService : UserService
    ){}

    @Query(() => Usertpye)
    async Userfind(
        @Args('id') id: FindUserByIdInput
    ){
        try {
            const user = await this.userService.FindUser(id.id)

            if(!user){
                return "User Not Found"
            }

            return user
            
        } catch (error) {
            throw new GraphQLError("Error in Resolver")
        }
    }

    // @Mutation(()=>Usertpye)
    // async AddUser(
    //     @Args("User") user:UserInput
        
    // ):Promise<UserInput>{

    //     try {
            

    //         const adduser = await this.userService.CreatUser(user)

    //         return adduser

            
    //     } catch (error) {
    //         throw new GraphQLError("Error in Resolver")
    //     }
    // }
    
}

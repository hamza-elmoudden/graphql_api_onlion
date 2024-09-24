import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './Schema/user.schema';
import { Model } from 'mongoose';
import { GraphQLError } from 'graphql';
import * as bcrypt from "bcrypt"


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModle:Model<User>
    ){}


    // async CreatUser(user:any){
    //     try {

    //         const saltOrRounds = 10
    //         user.password = await bcrypt.hash(user.password, saltOrRounds)

    //         const adduser = new this.userModle({
    //             ...user
    //         })

    //         await adduser.save()

    //         return adduser
            
    //     } catch (error) {
    //         throw new GraphQLError("Error In Server User")
    //     }
    // }

    async FindUser(id:string){
        try {

            const user = await this.userModle.findOne({
                "_id":id
            })

            return user

        } catch (error) {
            throw new GraphQLError("Error In Server User")
        }
    }


    async FindUserByEmail(email:string){
        try {
            // Find User
            const finduser = await this.userModle.findOne({
                "email":email
            }).exec()

            
            // Retrun User
            return finduser
        } catch (error) {
            // Retrun Error
            throw Error(`${error}`)
        }
    }
}

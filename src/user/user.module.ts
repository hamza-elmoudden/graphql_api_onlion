import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, Userchema } from './Schema/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:User.name,schema:Userchema}]),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule {}

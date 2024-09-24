import { Module } from '@nestjs/common';
import { ProducteResolver } from './producte.resolver';
import { ProducteService } from './producte.service';
import { Producte, Productechema } from './Schema/prodcut.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Firebaseimage } from './firebase.image';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: Producte.name, schema: Productechema }]),
    ],
    providers: [ProducteService,ProducteResolver,Firebaseimage],
    exports:[ProducteService]
})
export class ProducteModule {}

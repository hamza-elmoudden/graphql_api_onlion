import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './Schema/card.schema';
import { CardService } from './card.service';
import { ProducteModule } from 'src/producte/producte.module';
import { CardResolver } from './card.resolver';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports:[MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),ProducteModule,AuthModule],
    providers:[CardService, CardResolver],
    exports:[CardService]
})
export class CardModule {}

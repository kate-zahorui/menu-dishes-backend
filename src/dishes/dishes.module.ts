import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DishesService } from './dishes.service';
import { DishesResolver } from './dishes.resolver';
import { DishSchema } from './dishes.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Dish', schema: DishSchema }])],
  providers: [DishesService, DishesResolver],
})
export class DishesModule {}

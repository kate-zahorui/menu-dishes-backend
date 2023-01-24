import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDishDto } from './dto/create-dish.dto';
import { IDish } from './interfaces/dish.interface';

@Injectable()
export class DishesService {
  constructor(@InjectModel('Dish') private readonly dishModel: Model<IDish>) {}

  async getAll(): Promise<IDish[]> {
    const allDishes = await this.dishModel.find();
    return allDishes;
  }

  async create(dishDto: CreateDishDto): Promise<IDish> {
    const newDish = await this.dishModel.create(dishDto);
    return newDish;
  }

  // removeById(id: string) {
  //   return this.dishes.filter((i) => i.id !== id);
  // }

  // updateById(id: string, dishDto: UpdateDishDto) {
  //   const updatedDish = this.dishes.finfIndex(i => i.id === id)
  //   if (!updatedDish) {return 'error'}
  // }
}

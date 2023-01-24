import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';

@Injectable()
export class DishesService {
  private dishes = [];

  getAll() {
    return this.dishes;
  }

  create(dishDto: CreateDishDto) {
    return this.dishes.push({ ...dishDto, id: Date.now().toString() });
  }

  // removeById(id: string) {
  //   return this.dishes.filter((i) => i.id !== id);
  // }

  // updateById(id: string, dishDto: UpdateDishDto) {
  //   const updatedDish = this.dishes.finfIndex(i => i.id === id)
  //   if (!updatedDish) {return 'error'}
  // }
}

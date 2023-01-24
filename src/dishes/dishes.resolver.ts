import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DishesService } from './dishes.service';
import { DishType } from './models/dish.model';
import { CreateDishDto } from './dto/create-dish.dto';

@Resolver()
export class DishesResolver {
  constructor(private readonly dishesService: DishesService) {}

  @Query(() => [DishType])
  async dishes() {
    return this.dishesService.getAll();
  }

  @Mutation(() => DishType)
  async createDish(@Args('input') input: CreateDishDto) {
    return this.dishesService.create(input);
  }
}

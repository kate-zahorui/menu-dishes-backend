import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DishType {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field((type) => Int)
  price: number;
}

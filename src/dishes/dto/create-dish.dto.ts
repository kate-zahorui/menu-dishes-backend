import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDishDto {
  @Field()
  readonly title: string;

  @Field(() => Int)
  readonly price: number;
}

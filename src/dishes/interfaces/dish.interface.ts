import { Document } from 'mongoose';

export interface IDish extends Document {
  readonly title: string;
  readonly price: number;
}

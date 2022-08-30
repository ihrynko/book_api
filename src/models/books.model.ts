import { Schema, model } from 'mongoose';
import { TBook } from '../types';

const bookSchema = new Schema<TBook>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    pageCount: { type: Number, required: true },
    date: { type: Date,  default: Date.now },
  },
  { timestamps: true }
);

export default model('books', bookSchema);
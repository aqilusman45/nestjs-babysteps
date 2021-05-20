import { Schema, Document } from "mongoose";

export interface IProduct {
  id: string;
  quantity: number;
  name: string;
}

export interface IProductDocument extends Document {}

export const productSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

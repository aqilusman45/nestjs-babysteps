import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { transformDoc } from "src/utils/transformDocs";
import { productSchema, IProduct } from "./product.model";

@Injectable()
export class ProductService {
  products: IProduct[] = [];

  constructor(
    @InjectModel("Product") private readonly Product: Model<IProduct>
  ) {}

  async addProduct(data: Omit<IProduct, "id">) {
    const newProduct = new this.Product({...data});
    const prod = await newProduct.save();
    return transformDoc(prod);
  }

  getProducts() {
    return this.products;
  }

  getProduct(productId: string) {
    const prod = this.products.find(({ id }) => id === productId);
    if (!prod) throw new NotFoundException("Product not found!");
    return { ...prod };
  }
}

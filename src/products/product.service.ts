import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
  products: Product[] = [];

  addProduct(data: Omit<Product, "id">) {
    this.products.push({ ...data, id: Date.now().toString() });
    return this.products;
  }
}

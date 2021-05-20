import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
  products: Product[] = [];

  addProduct(data: Omit<Product, "id">) {
    this.products.push({ ...data, id: Date.now().toString() });
    return this.products;
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

import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post("add-product")
  addProduct(@Body() data: Omit<Product, "id">): Product[] {
    return this.productService.addProduct(data);
  }

  @Get("get-products")
  getProducts() {
    return this.productService.getProducts();
  }

  @Get("get-product/:id")
  getProduct(@Param('id') productId: string) {
    console.log(productId);
    return this.productService.getProduct(productId);
  }
}

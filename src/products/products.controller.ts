import { Body, Controller, Get, Post } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post('add-product')
  addProduct(@Body() data: Omit<Product, "id">): Product[] {
    return this.productService.addProduct(data);
  }

  @Get('get-products')
  getProducts() {
    return this.productService.getProducts();
  }
}

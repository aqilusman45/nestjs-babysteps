import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { productSchema } from "./product.model";
import { ProductService } from "./product.service";
import { ProductsController } from "./products.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Product",
        schema: productSchema,
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}

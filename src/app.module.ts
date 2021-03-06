import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewService } from './new.service';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb://localhost:27017/xord')],
  controllers: [AppController],
  providers: [AppService, NewService],
})
export class AppModule {}

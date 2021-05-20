import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewService } from './new.service';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService, NewService],
})
export class AppModule {}

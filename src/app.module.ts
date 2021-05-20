import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewService } from './new.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, NewService],
})
export class AppModule {}

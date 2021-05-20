import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { NewService } from "./new.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly newService: NewService
  ) {}

  @Get("new-hello")
  getNewHello(): string {
    return this.newService.getNewHello();
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

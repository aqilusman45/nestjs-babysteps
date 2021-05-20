import { Controller, Get, Header, Post } from "@nestjs/common";
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
  postHello(): {
    data: string;
  } {
    return {
      data: "some data",
    };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-page')
  @Header('Content-Type', 'text/html')
  getTestPage(): string {
    return this.appService.getPage();
  }
}

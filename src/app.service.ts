import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPage(): string {
    return '<h1>Test Page</h1>'
  }

  postHello(): string {
    return 'Post Hello!';
  }
}

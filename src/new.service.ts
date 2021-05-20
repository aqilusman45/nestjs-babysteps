import { Injectable } from '@nestjs/common';

@Injectable()
export class NewService {
  getNewHello(): string {
    return 'New World!';
  }

}

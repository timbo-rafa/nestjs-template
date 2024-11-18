import { Injectable } from '@nestjs/common';
import { Userlogin } from './app.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  login(userLogin: Userlogin) {
    
    return 1;
  }
}

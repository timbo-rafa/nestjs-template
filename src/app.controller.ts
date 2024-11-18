import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserLoginError, UserService } from './user.service';

export type Userlogin  = {
  username: string;
  password: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  
  ) {}

  @Post('/login')
  login(userLogin: Userlogin) {
    const userResult = this.userService.getUserByUsername(userLogin.username, userLogin.password);

    if (userResult.error) {
      return this.handleUserLoginError(userResult.error);
    }

    return null

    //return this.appService.login(userLogin);
  }

  handleUserLoginError(error: UserLoginError) {
    if (error === 'INCORRECT_PASSWORD' || error === 'USER_NOT_FOUND') {
      return 'User was not found'
    }
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}

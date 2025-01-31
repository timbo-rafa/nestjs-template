import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/ping')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }
  
  @Get('/db')
  async pingDatabase() {
    const databaseStatus = await this.appService.pingDatabase();
    return databaseStatus
  }
}

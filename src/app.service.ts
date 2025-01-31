import { Injectable } from '@nestjs/common';
import { DbService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly dbService: DbService) {}
  getHello(): string {
    return 'Hello World!';
  }

  pingDatabase() {
    return this.dbService.$queryRaw<[{database: 'up'}]>`SELECT 'up' as "database"`;
  }

  run() {
    return 1;
  }
}

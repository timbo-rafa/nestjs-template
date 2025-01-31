import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule,
    RouterModule.register([{ path: 'api/v1', children: [] }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

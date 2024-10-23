import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './servicios/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database_raffle',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'raffle_db',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

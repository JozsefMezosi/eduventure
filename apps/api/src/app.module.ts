import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_SCHEMA } from './config/config.schema';
import { loadConfig } from './config/load-config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: CONFIG_SCHEMA,
      load: [loadConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

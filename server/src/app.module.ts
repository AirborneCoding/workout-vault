import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramModule } from './program/program.module';
import { CategoryModule } from './category/category.module';
import { ProgramDetailModule } from './program-detail/program-detail.module';
import { Category } from './category/models/category.entity';
import { Program } from './program/models/program.entity';
import { ProgramDetail } from './program-detail/models/programDetails.entity';

@Module({
  imports: [

    //* DB
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          database: config.get<string>("DB_DATABASE"),
          username: config.get<string>("DB_USERNAME"),
          password: config.get<string>("DB_PASSWORD"),
          port: config.get<number>("DB_PORT"),
          host: config.get<string>("DB_HOST"),
          synchronize: process.env.NODE_ENV !== "production",
          entities: [Program, ProgramDetail, Category],
        }
      }
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),

    //* MODULES
    ProgramModule,
    CategoryModule,
    ProgramDetailModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
  ],
})
export class AppModule { }

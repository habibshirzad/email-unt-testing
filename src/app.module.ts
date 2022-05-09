import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/email.module';
import { EmailModule } from './email/email.module';
import * as Joi from '@hapi/Joi'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),
  EmailModule,
  DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

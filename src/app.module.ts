import { Module } from '@nestjs/common';
import { Summarise } from './summarise/summarise.module';
import { testEnv } from './testEnv/testEnv.module';
import * as dotenv from 'dotenv';
dotenv.config()

@Module({
  imports: [Summarise, testEnv]
})
export class AppModule {}

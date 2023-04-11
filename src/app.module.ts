import { Module } from '@nestjs/common';
import { Summarise } from './summarise/summarise.module';

@Module({
  imports: [Summarise]
})
export class AppModule {}

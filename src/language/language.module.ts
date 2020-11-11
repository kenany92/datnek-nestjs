import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './controller/language.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './model/language';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [LanguageService],
  controllers: [LanguageController]
})
export class LanguageModule {}

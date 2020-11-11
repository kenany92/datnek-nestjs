import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguageModule } from './language/language.module';
import { Language } from './language/model/language';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    username: 'root',
    database: 'datnek',
    port: 3306,
    entities: [Language],
    synchronize: true
    }), 
    LanguageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

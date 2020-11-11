import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LanguageService } from '../language.service';
import { Language } from '../model/language';

@Controller('api/languages')
export class LanguageController {

    constructor(private readonly service: LanguageService) {}

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    get(@Param('id') id: number) {
        return this.service.get(id);
    }

    @Post()
    create(@Body() language: Language) {
        return this.service.save(language);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() Language: Language) {
        return this.service.update(id, Language);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

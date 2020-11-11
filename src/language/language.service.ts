import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Language } from './model/language';

@Injectable()
export class LanguageService {

    constructor(
        @InjectRepository(Language) private readonly languageRepository: Repository<Language>
    ) {}

    save(language: Language): Observable<Language> {
        return from(this.languageRepository.save(language));
    }

    getAll(): Observable<Language[]> {
        return from(this.languageRepository.find());
    }

    get(id: number): Observable<Language> {
        return from(this.languageRepository.findOne(id));
    }

    update(id: number, language: Language): Observable<any> {
        return from(this.languageRepository.update(id, language));
    }

    delete(id: number): Observable<any> {
        return from(this.languageRepository.delete(id));
    }
}

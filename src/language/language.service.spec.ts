import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { LanguageService } from './language.service';
import { Language } from './model/language';

describe('LanguageService', () => {
  let service: LanguageService;
  let repository: Repository<Language>;
  let languages: Language[] = [];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageService, {provide: getRepositoryToken(Language), useClass: Repository}],
    }).compile();

    service = module.get<LanguageService>(LanguageService);
    repository = module.get<Repository<Language>>(getRepositoryToken(Language));

    const language = new Language();
    language.id = 1;
    language.name = 'English';
    language.spoken = 'Good';
    language.understanding = 'Good';
    language.written = 'Good';

    languages.push(language);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getAll', () => {
    const result = new Observable<Language[]>(subscriber => {
      subscriber.next(languages);
    })

    jest.spyOn(service, 'getAll').mockImplementation(() => result);

    service.getAll().subscribe((langs) => {
      expect(langs).toBeDefined();
      expect(langs).toBeInstanceOf(Array);
      expect(langs).toBe(languages);
    });

  });

  it('get one', () => {
    const result = (id: number) => new Observable<Language>(subscriber => {
      const l = languages.find(it => it.id === id);
      subscriber.next(l);
    })
    jest.spyOn(service, 'get').mockImplementation((id) => result(id));

    service.get(1).subscribe((lang) => {
      expect(lang).toBeDefined();
      expect(lang).toBeInstanceOf(Language);
      expect(lang.id).toBe(1);
    });
  });

  it('create', () => {
    const save = (language: Language) => new Observable<Language>(subscriber => {
      language.id = languages.length + 1;
      languages.push(language);
      subscriber.next(language);
    })

    jest.spyOn(service, 'save').mockImplementation((language) => save(language));

    const lang = new Language();
    lang.name = 'French';
    lang.spoken = 'Good';
    lang.understanding = 'Good';
    lang.written = 'Good';

    const size = languages.length;

    expect(lang.id).toBeUndefined();

    service.save(lang).subscribe((result) => {
      const newSize = languages.length;

      expect(result.id).toBeDefined();
      expect(newSize).toEqual(size + 1);
      expect(result.id).toEqual(newSize);
    });

    
  });
});

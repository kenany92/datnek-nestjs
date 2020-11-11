import { Language } from './language';

describe('Language', () => {
  it('should be defined', () => {
    expect(new Language()).toBeDefined();
  });

  const language: Language = new Language();
  language.id = 1;
  language.name = 'French';
  language.spoken = 'Good';
  language.understanding = 'Good';
  language.written = 'Good';

  it('Language model should contains id field', () => {
    expect(language).toHaveProperty('id');
  });

  it('The id field is defined', () => {
    expect(language.id).toBeDefined();
  });

  it('The value of id field match with the expected', () => {
    expect(language.id).toBe(1);
  });

  it('Language model should contains name field', () => {
    expect(language).toHaveProperty('name');
  });

  it('The name field is defined', () => {
    expect(language.name).toBeDefined();
  });

  it('The value of name field match with the expected', () => {
    expect(language.name).toBe('French');
  });

  it('Language model should contains spoken field', () => {
    expect(language).toHaveProperty('spoken');
  });

  it('The spoken field is defined', () => {
    expect(language.spoken).toBeDefined();
  });

  it('The value of spoken field match with the expected', () => {
    expect(language.spoken).toBe('Good');
  });

  it('Language model should contains understanding field', () => {
    expect(language).toHaveProperty('understanding');
  });

  it('The understanding field is defined', () => {
    expect(language.understanding).toBeDefined();
  });

  it('The value of understanding field match with the expected', () => {
    expect(language.understanding).toBe('Good');
  });

  it('Language model should contains written field', () => {
    expect(language).toHaveProperty('written');
  });

  it('The written field is defined', () => {
    expect(language.written).toBeDefined();
  });

  it('The value of written field match with the expected', () => {
    expect(language.written).toBe('Good');
  });

});

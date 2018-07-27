export interface ILocaleDTO {
  language: string;
}

export interface ILocale {
  constructor: {
    create(locale: ILocaleDTO): ILocale;
  };
  language: string;
}

export class Locale implements ILocale {
  // prettier-ignore
  "constructor": typeof Locale;

  constructor(public language: string) {}

  static create(dto: ILocaleDTO): ILocale {
    const model = new Locale(dto.language);
    return model;
  }

  serialize(): ILocaleDTO {
    return {
      language: this.language,
    };
  }
}

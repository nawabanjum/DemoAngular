import { APP_INITIALIZER, LOCALE_ID } from "@angular/core";
import { ITranslationService, I18NEXT_SERVICE, I18NextModule } from 'angular-i18next'
import { InitOptions } from "i18next";
import { enGB } from './en-GB';

function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const i18nOptions: InitOptions = {
  supportedLngs: ['en', 'en-GB'],
  fallbackLng: 'en',
  load: "currentOnly",
  debug: true,
  returnEmptyString: true,
  interpolation: {
    format: I18NextModule.interpolationFormat()
  },
  returnNull: false,
  resources: {
    en: enGB
  }
};

function appInit(i18next: ITranslationService) {
  return () => i18next.init(i18nOptions);
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  }];

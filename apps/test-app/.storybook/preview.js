import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { I18NextModule, I18NEXT_SERVICE, } from 'angular-i18next'
import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { i18nOptions } from '../src/app/i18n/config'

// Ref: https://github.com/Romanchuk/angular-i18next/blob/master/libs/angular-i18next/src/tests/projectTests/projectTests.spec.ts

function appInit(i18next) {
  return () => i18next.init(i18nOptions);
}

function localeIdFactory(i18next) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true,
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory,
  },
];

export const decorators = [
  moduleMetadata({
    imports: [I18NextModule.forRoot()],
    providers: [I18N_PROVIDERS]
  }),
  componentWrapperDecorator((story) => `<div>${story}<div>`)
];

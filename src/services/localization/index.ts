import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { storage } from 'services/mkkv';
import enCommon from 'translations/en/common.json';
import ukCommon from 'translations/uk/common.json';

export const defaultNS = 'common';

export const resources = {
  en: { common: enCommon },
  uk: { common: ukCommon },
} as const;

export const initializeLocalization = () => {
  const language = getLocalStorageLanguage();

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: language,
    ns: ['common'],
    defaultNS,
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
};

export const getLocalStorageLanguage = () => storage.getString('language') as Language | undefined;
export const setLocalStorageLanguage = (language: Language) => storage.set('language', language);

export const getCurrentLanguage = () => i18n.language;
export const changeLanguage = (newLanguage: Language) => i18n.changeLanguage(newLanguage);

export const LANGUAGES: Language[] = ['en', 'uk'];

export type Language = keyof typeof resources;

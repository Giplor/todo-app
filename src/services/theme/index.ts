import { storage } from 'services/mkkv';
import { ThemeType } from 'theme';

export const getLocalStorageTheme = () => storage.getString('theme') as ThemeType | undefined;

export const setLocalStorageTheme = (theme: ThemeType) => storage.set('theme', theme);

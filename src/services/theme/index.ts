import { storage } from 'services/mkkv';
import { ThemeType } from 'theme';

export const getLocalTheme = () => storage.getString('theme') as ThemeType | undefined;

export const setLocalTheme = (theme: ThemeType) => storage.set('theme', theme);

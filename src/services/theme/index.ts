import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeType } from 'theme';

export const fetchLocalTheme = () => AsyncStorage.getItem('theme');

export const setLocalTheme = (theme: ThemeType) => AsyncStorage.setItem('theme', theme);

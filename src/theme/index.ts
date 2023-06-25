import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native';
import { Platform } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/src/types';

type MaterialThemeColors = {
  darkThemeColors?: MD3Colors;
  lightThemeColors?: MD3Colors;
};

const getNavigationThemes = ({ darkThemeColors, lightThemeColors }: MaterialThemeColors) =>
  adaptNavigationTheme({
    reactNavigationDark: NavigationDarkTheme,
    reactNavigationLight: NavigationLightTheme,
    materialDark: darkThemeColors && { ...MD3DarkTheme, colors: darkThemeColors },
    materialLight: lightThemeColors && { ...MD3LightTheme, colors: lightThemeColors },
  });

export const combinedDarkTheme = (darkThemeColors: MD3Colors) => {
  const { DarkTheme } = getNavigationThemes({ darkThemeColors });
  return {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...darkThemeColors,
      ...DarkTheme.colors,
    },
  };
};

export const combinedLightTheme = (lightThemeColors: MD3Colors) => {
  const { LightTheme } = getNavigationThemes({ lightThemeColors });
  return {
    ...MD3DarkTheme,
    ...LightTheme,
    colors: {
      ...lightThemeColors,
      ...LightTheme.colors,
    },
  };
};

export const isSupportedMaterial = Platform.OS === 'android' && Platform.Version >= 31;

export type Theme = ReturnType<typeof combinedDarkTheme>;

export type ThemeType = 'light' | 'dark' | 'system';

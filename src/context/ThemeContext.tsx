import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { PropsWithChildren, createContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { getLocalStorageTheme } from 'services/theme';
import { type ThemeType, type Theme, combinedDarkTheme, combinedLightTheme } from 'theme';

type ThemeContextType = {
  theme: Theme;
  themeType: ThemeType;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme() as ThemeType;

  const initialThemeType = getLocalStorageTheme();

  const [themeType, setThemeType] = useState(
    initialThemeType === 'system' || typeof initialThemeType === 'undefined'
      ? colorScheme
      : initialThemeType,
  );

  const { theme: material3Theme } = useMaterial3Theme();

  const darkTheme = combinedDarkTheme(material3Theme.dark);
  const lightTheme = combinedLightTheme(material3Theme.light);

  const theme =
    (themeType === 'system' && colorScheme === 'dark') || themeType === 'dark'
      ? darkTheme
      : lightTheme;

  const preferences = useMemo(
    () => ({
      theme,
      themeType,
      setThemeType,
    }),
    [theme, themeType],
  );

  return <ThemeContext.Provider value={preferences}>{children}</ThemeContext.Provider>;
};

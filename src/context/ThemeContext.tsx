// import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { createContext, useEffect, useMemo, useState } from 'react';
// import { useColorScheme } from 'react-native';
// import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { setLocalTheme } from 'services/theme';
import { CombinedDarkTheme, CombinedDefaultTheme, Theme, ThemeType } from 'theme';
import { ReactChildren } from 'types';

type ThemeContextType = {
  theme: Theme;
  themeType: ThemeType;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
};

interface ThemeContextProviderProps extends ReactChildren {
  initialTheme: ThemeType | null;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: CombinedDefaultTheme,
  themeType: 'Light',
  setThemeType: () => {},
});

export const ThemeContextProvider = ({ children, initialTheme }: ThemeContextProviderProps) => {
  const [themeType, setThemeType] = useState<ThemeType>(initialTheme ?? 'Light');

  // const colorScheme = useColorScheme();

  // const { theme: materialTheme } = useMaterial3Theme();

  useEffect(() => {
    const localSaveTheme = async () => {
      try {
        await setLocalTheme(themeType);
      } catch (error) {
        console.log(error);
      }
    };

    localSaveTheme();
  }, [themeType]);

  // const theme = colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
  const theme = themeType === 'Dark' ? CombinedDarkTheme : CombinedDefaultTheme;

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

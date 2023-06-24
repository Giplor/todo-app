import { ThemeContextProvider } from 'context/ThemeContext';
import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { fetchLocalTheme } from 'services/theme';
import { ThemeType } from 'theme';
import { ReactChildren } from 'types';

interface AppReadyViewProps extends ReactChildren {
  hideSplashScreen: () => Promise<boolean>;
}

export const AppReadyView = ({ children, hideSplashScreen }: AppReadyViewProps) => {
  const [appIsReady, setAppIsReady] = useState(false);

  const initialTheme = useRef<ThemeType>('Light');

  useEffect(() => {
    const prepare = async () => {
      try {
        const localTheme = (await fetchLocalTheme()) as ThemeType;

        if (localTheme) {
          initialTheme.current = localTheme;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await hideSplashScreen();
    }
  }, [appIsReady, hideSplashScreen]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeContextProvider initialTheme={initialTheme.current}>{children}</ThemeContextProvider>
    </View>
  );
};

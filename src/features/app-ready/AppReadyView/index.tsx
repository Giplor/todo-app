import { ThemeProvider } from 'context/ThemeContext';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

interface AppReadyViewProps extends PropsWithChildren {
  hideSplashScreen: () => Promise<boolean>;
}

export const AppReadyView = ({ children, hideSplashScreen }: AppReadyViewProps) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    setAppIsReady(true);
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
      <ThemeProvider>{children}</ThemeProvider>
    </View>
  );
};

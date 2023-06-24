import * as SplashScreen from 'expo-splash-screen';
import { AppReadyView } from 'features/app-ready/AppReadyView';
import { RootNavigation } from 'navigation/RootNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initializeLocalization } from 'services/localization';
import { persistor, store } from 'store';

SplashScreen.preventAutoHideAsync();

initializeLocalization();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <AppReadyView hideSplashScreen={SplashScreen.hideAsync}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <RootNavigation />
            </GestureHandlerRootView>
          </AppReadyView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppTheme } from 'hooks/useAppTheme';
import { useTranslation } from 'react-i18next';
import { IconButton, PaperProvider } from 'react-native-paper';
import { AllTasksScreen } from 'screens/AllTasksScreen';
import { ChangeLanguageScreen } from 'screens/ChangeLanguageScreen';
import { SettingsScreen } from 'screens/SettingsScreen';

import { RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const { theme } = useAppTheme();

  const { t } = useTranslation();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <RootStack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
          <RootStack.Screen
            name="AllTasks"
            component={AllTasksScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <IconButton icon="cog" onPress={() => navigation.navigate('Settings')} />
              ),
              title: t('todos'),
            })}
          />
          <RootStack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: t('settings'),
            }}
          />
          <RootStack.Screen
            name="ChangeLanguage"
            component={ChangeLanguageScreen}
            options={{ title: t('changeLanguage') }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

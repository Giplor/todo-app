import { ChangeLanguage } from 'features/change-language/ChangeLanguage';
import { ChangeTheme } from 'features/change-theme/ChangeTheme';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';

export const SettingsScreen = () => {
  return (
    <View>
      <ChangeTheme />
      <Divider />
      <ChangeLanguage />
    </View>
  );
};

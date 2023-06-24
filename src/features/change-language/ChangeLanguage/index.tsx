import { useNavigation } from '@react-navigation/native';
import { SettingItem } from 'features/settings/SettingItem';
import { useTranslation } from 'react-i18next';

export const ChangeLanguage = () => {
  const { t } = useTranslation();

  const navigation = useNavigation();

  const goToChangeLanguageScreen = () => {
    navigation.navigate('ChangeLanguage');
  };

  return (
    <SettingItem
      onPress={goToChangeLanguageScreen}
      mainText={t('language')}
      minorText={t('currentLanguage')}
    />
  );
};

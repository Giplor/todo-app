import { AntDesign } from '@expo/vector-icons';
import { SettingItem } from 'features/settings/SettingItem';
import { useAppTheme } from 'hooks/useAppTheme';
import { useTranslation } from 'react-i18next';
import {
  Language,
  changeLanguage,
  getCurrentLanguage,
  setLocalStorageLanguage,
} from 'services/localization';

export interface LanguageItemProps {
  language: Language;
}

export const LanguageItem = ({ language }: LanguageItemProps) => {
  const { theme } = useAppTheme();

  const currentLanguage = getCurrentLanguage();

  const isSetted = currentLanguage === language;

  const onChangeLanguage = () => {
    if (language !== currentLanguage) {
      setLocalStorageLanguage(language);
      changeLanguage(language);
    }
  };

  const { t } = useTranslation();
  return (
    <SettingItem
      mainText={t(language)}
      right={
        isSetted && (
          <AntDesign
            name="check"
            size={24}
            color={theme.colors.primary}
            style={{ marginLeft: 30 }}
          />
        )
      }
      onPress={onChangeLanguage}
    />
  );
};

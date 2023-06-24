import { useAppTheme } from 'hooks/useAppTheme';
import { useTranslation } from 'react-i18next';
import { RadioButton } from 'react-native-paper';
import { ThemeType } from 'theme';

import { ThemeItem } from '../ThemeItem';

export const ThemeItemsGroup = () => {
  const { themeType, setThemeType } = useAppTheme();

  const { t } = useTranslation();

  const onChangeTheme = (theme: string) => {
    if (theme !== themeType) {
      setThemeType(theme as ThemeType);
    }
  };

  return (
    <RadioButton.Group onValueChange={onChangeTheme} value={themeType}>
      <ThemeItem value="Light" label={t('lightTheme')} />
      <ThemeItem value="Dark" label={t('darkTheme')} />
      <ThemeItem value="System" label={t('systemTheme')} />
    </RadioButton.Group>
  );
};

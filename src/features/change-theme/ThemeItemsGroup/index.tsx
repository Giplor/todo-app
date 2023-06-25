import { useAppTheme } from 'hooks/useAppTheme';
import { useTranslation } from 'react-i18next';
import { RadioButton } from 'react-native-paper';
import { setLocalTheme } from 'services/theme';
import { ThemeType } from 'theme';

import { ThemeItem } from '../ThemeItem';

export const ThemeItemsGroup = () => {
  const { themeType, setThemeType } = useAppTheme();

  const { t } = useTranslation();

  const onChangeTheme = (theme: string) => {
    if (theme !== themeType) {
      setThemeType(theme as ThemeType);
      setLocalTheme(theme as ThemeType);
    }
  };

  return (
    <RadioButton.Group onValueChange={onChangeTheme} value={themeType}>
      <ThemeItem value="light" label={t('lightTheme')} />
      <ThemeItem value="dark" label={t('darkTheme')} />
      <ThemeItem value="system" label={t('systemTheme')} />
    </RadioButton.Group>
  );
};

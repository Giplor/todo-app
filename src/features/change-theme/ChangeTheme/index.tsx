import { SettingItem } from 'features/settings/SettingItem';
import { useAppTheme } from 'hooks/useAppTheme';
import { useModal } from 'hooks/useModal';
import { useTranslation } from 'react-i18next';

import { ChangeThemeModal } from '../ChangeThemeModal';

export const ChangeTheme = () => {
  const { visible, showModal, hideModal } = useModal();

  const { themeType } = useAppTheme();

  const { t } = useTranslation();

  return (
    <>
      <SettingItem
        onPress={showModal}
        mainText={t('theme')}
        minorText={themeType === 'dark' ? t('darkTheme') : t('lightTheme')}
      />
      <ChangeThemeModal visible={visible} hideModal={hideModal} />
    </>
  );
};

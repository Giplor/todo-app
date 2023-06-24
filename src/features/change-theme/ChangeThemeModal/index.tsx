import { useTranslation } from 'react-i18next';
import { Button, Dialog, Portal } from 'react-native-paper';

import { ThemeItemsGroup } from '../ThemeItemsGroup';

interface ChangeThemeModalProps {
  visible: boolean;
  hideModal: () => void;
}
export const ChangeThemeModal = ({ visible, hideModal }: ChangeThemeModalProps) => {
  const { t } = useTranslation();

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideModal}>
        <Dialog.Title>{t('changeTheme')}</Dialog.Title>
        <Dialog.Content>
          <ThemeItemsGroup />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideModal}>{t('cancel')}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

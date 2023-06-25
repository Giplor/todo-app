import { useAppTheme } from 'hooks/useAppTheme';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export const EmptyTodoList = () => {
  const { theme } = useAppTheme();

  const { t } = useTranslation();

  return (
    <View style={[styles.container]}>
      <Text variant="headlineMedium">{t('epmtyTodoList')}</Text>
      <Text style={{ color: theme.colors.primary }}>{`${t('createATodo')} +`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

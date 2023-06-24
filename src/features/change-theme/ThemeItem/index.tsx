import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

interface ThemeItemProps {
  value: string;
  label: string;
}

export const ThemeItem = ({ value, label }: ThemeItemProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <RadioButton value={value} />
      <Text>{label}</Text>
    </View>
  );
};

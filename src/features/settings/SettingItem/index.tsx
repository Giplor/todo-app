import { MinorText } from 'components/MinorText';
import { Touchable, TouchableProps } from 'components/Touchable';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface SettingItemProps extends Omit<TouchableProps, 'children'> {
  mainText: string;
  minorText?: string;
  right?: React.ReactNode;
}

export const SettingItem = ({ mainText, minorText, right, ...rest }: SettingItemProps) => {
  return (
    <Touchable style={styles.settingItemContainer} {...rest}>
      <View>
        <Text>{mainText}</Text>
        {minorText && <MinorText>{minorText}</MinorText>}
      </View>
      {right}
    </Touchable>
  );
};

const styles = StyleSheet.create({
  settingItemContainer: {
    padding: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

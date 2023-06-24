import { Text } from 'react-native-paper';

export const MinorText = ({ children }: { children: string }) => {
  return (
    <Text variant="labelLarge" style={{ opacity: 0.3 }}>
      {children}
    </Text>
  );
};

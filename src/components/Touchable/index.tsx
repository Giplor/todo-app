import { TouchableRipple, TouchableRippleProps } from 'react-native-paper';

export interface TouchableProps extends TouchableRippleProps {}

export const Touchable = ({ children, ...rest }: TouchableProps) => {
  return (
    <TouchableRipple {...rest}>
      <>{children}</>
    </TouchableRipple>
  );
};

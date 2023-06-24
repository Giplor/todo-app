import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AllTasks: undefined;
  Settings: undefined;
  ChangeLanguage: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

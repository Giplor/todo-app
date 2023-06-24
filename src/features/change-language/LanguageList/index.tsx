import { FlatList } from 'react-native';
import { LANGUAGES, Language } from 'services/localization';

import { LanguageItem } from '../LanguageItem';

export const LanguageList = () => {
  const renderItem = ({ item }: { item: Language }) => <LanguageItem language={item} />;
  return (
    <FlatList
      style={{ flex: 1 }}
      data={LANGUAGES}
      keyExtractor={(item) => item}
      renderItem={renderItem}
    />
  );
};

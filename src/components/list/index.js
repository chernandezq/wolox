import React from 'react';
import {FlatList, View} from 'react-native';

import {styles} from './style';
import Card from '../card';

const List = ({onCardPress, data}) => {
  const keyExtractor = (data) => data.id;

  const renderItem = ({item}) => {
    return <Card item={item} onPress={() => onCardPress(item)} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatlist}
      keyboardShouldPersistTaps="handled"
    />
  );
};

export default List;

import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import ListItem from './ListItem';
import Separator from './Separator';

const List = ({ items, onItemSelected, selectedItem }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ListItem
          text={item}
          onPress={() => onItemSelected(item)}
          isSelected={item === selectedItem}
        />
      )}
      keyExtractor={(_, i) => i}
      ItemSeparatorComponent={Separator}
    />
  </View>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  onItemSelected: PropTypes.func,
  selectedItem: PropTypes.string,
};

export default List;

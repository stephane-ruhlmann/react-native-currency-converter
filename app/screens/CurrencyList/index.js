import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';

import currencies from '../../data/currencies';
import List from '../../components/List';
import connector from './connector';

class CurrencyList extends Component {
  handlePress = currency => {
    this.props.changeCurrency(currency);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <List
          items={currencies}
          onItemSelected={this.handlePress}
          selectedItem={this.props.selectedCurrency}
        />
      </View>
    );
  }
}

CurrencyList.propTypes = {
  navigation: PropTypes.object,
  changeCurrency: PropTypes.func,
  selectedCurrency: PropTypes.string,
};

export default connector(CurrencyList);

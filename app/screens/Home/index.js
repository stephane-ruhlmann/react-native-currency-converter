import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import connector from './connector';
import Container from '../../components/Container';
import Logo from '../../components/Logo';
import InputButton from '../../components/TextInput';
import ClearButton from '../../components/ClearButton';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    conversionRate: PropTypes.number,
    amount: PropTypes.number,
    swapCurrency: PropTypes.func,
    changeCurrencyAmount: PropTypes.func,
  };

  goToCurrencyList = ({ title, currencyType }) => () => {
    this.props.navigation.navigate('CurrencyList', { title, currencyType });
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputButton
            onPress={this.goToCurrencyList({ title: 'Base Currency', currencyType: 'base' })}
            buttonText={this.props.baseCurrency}
            defaultValue={String(this.props.amount)}
            onChangeText={a => this.props.changeCurrencyAmount(a)}
            editable
          />
          <InputButton
            onPress={this.goToCurrencyList({ title: 'Quote Currency', currencyType: 'quote' })}
            buttonText={this.props.quoteCurrency}
            defaultValue={String(this.props.amount * this.props.conversionRate)}
            editable={false}
          />
          <ClearButton onPress={() => this.props.swapCurrency()} text="Reverse currencies" />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default connector(Home);

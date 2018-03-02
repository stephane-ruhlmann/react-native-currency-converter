import { connect } from 'react-redux';

import { swapCurrency, changeCurrencyAmount } from '../../module/currencies/actions';

const mapStateToProps = (state) => {
  const {
    baseCurrency, quoteCurrency, amount, conversions,
  } = state.currencies;
  return {
    baseCurrency,
    quoteCurrency,
    conversionRate: conversions[baseCurrency][quoteCurrency],
    amount,
  };
};

const mapDispatchToProps = dispatch => ({
  swapCurrency: () => dispatch(swapCurrency()),
  changeCurrencyAmount: amount => dispatch(changeCurrencyAmount({ amount: Number(amount) })),
});

export default connect(mapStateToProps, mapDispatchToProps);

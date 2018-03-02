import { connect } from 'react-redux';

import { changeBaseCurrency, changeQuoteCurrency } from '../../module/currencies/actions';

const mapStateToProps = (state, { navigation }) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const { state: { params: { currencyType } } } = navigation;
  return {
    selectedCurrency: currencyType === 'base' ? baseCurrency : quoteCurrency,
  };
};

const mapDispatchToProps = (dispatch, { navigation }) => ({
  changeCurrency: currency => {
    const { state: { params: { currencyType } } } = navigation;
    const changeMethod = currencyType === 'base' ? changeBaseCurrency : changeQuoteCurrency;
    dispatch(changeMethod({ currency }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);

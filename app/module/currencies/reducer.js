import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  CHANGE_CURRENCY_AMOUNT,
} from './actions';

const initialState = {
  baseCurrency: 'EUR',
  quoteCurrency: 'CAD',
  amount: 1,
  conversions: {
    EUR: {
      CAD: 1.57481,
      EUR: 1,
      USD: 1.23274,
    },
    CAD: {
      EUR: 0.635,
      CAD: 1,
      USD: 0.77479,
    },
    USD: {
      EUR: 0.81122,
      CAD: 1.29068,
      USD: 1,
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAP_CURRENCY:
      return { ...state, baseCurrency: state.quoteCurrency, quoteCurrency: state.baseCurrency };

    case CHANGE_BASE_CURRENCY:
      return { ...state, baseCurrency: action.payload.currency };

    case CHANGE_QUOTE_CURRENCY:
      return { ...state, quoteCurrency: action.payload.currency };

    case CHANGE_CURRENCY_AMOUNT:
      return { ...state, amount: action.payload.amount };

    default:
      return state;
  }
};

export default reducer;

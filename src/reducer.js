import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions";

function reducer(state, action) {
  console.log({ state, action });
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let tempcart = [];
    if (action.payload.amount === 1) {
      tempcart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    } else {
      tempcart = state.cart.map((cartItem) => {
        if (cartItem.id == action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempcart };
  }

  if (action.type === INCREASE) {
    let tempcart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
      }
      return cartItem;
    });
    return { ...state, cart: tempcart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  return state;
}

export default reducer;

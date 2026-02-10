const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export const cartActionTypes = {
  SET_CART: "cart/SET_CART",
  SET_PAYMENT: "cart/SET_PAYMENT",
  SET_ADDRESS: "cart/SET_ADDRESS",
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case cartActionTypes.SET_CART:
      return { ...state, cart: action.payload };

    case cartActionTypes.SET_PAYMENT:
      return { ...state, payment: action.payload };

    case cartActionTypes.SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
}

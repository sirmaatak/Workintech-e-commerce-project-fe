import { cartActionTypes } from "../reducers/shoppingCart.reducer";

export const setCart = (cart) => ({ type: cartActionTypes.SET_CART, payload: cart });
export const setPayment = (payment) => ({ type: cartActionTypes.SET_PAYMENT, payload: payment });
export const setAddress = (address) => ({ type: cartActionTypes.SET_ADDRESS, payload: address });

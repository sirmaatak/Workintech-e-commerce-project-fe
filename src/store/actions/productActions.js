import { productActionTypes } from "../reducers/product.reducer";

export const setCategories = (categories) => ({ type: productActionTypes.SET_CATEGORIES, payload: categories });
export const setProductList = (list) => ({ type: productActionTypes.SET_PRODUCT_LIST, payload: list });
export const setTotal = (total) => ({ type: productActionTypes.SET_TOTAL, payload: total });
export const setFetchState = (state) => ({ type: productActionTypes.SET_FETCH_STATE, payload: state });
export const setLimit = (limit) => ({ type: productActionTypes.SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: productActionTypes.SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: productActionTypes.SET_FILTER, payload: filter });

const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED", // "NOT_FETCHED" | "FETCHING" | "FETCHED" | "FAILED"
};

export const productActionTypes = {
  SET_CATEGORIES: "product/SET_CATEGORIES",
  SET_PRODUCT_LIST: "product/SET_PRODUCT_LIST",
  SET_TOTAL: "product/SET_TOTAL",
  SET_FETCH_STATE: "product/SET_FETCH_STATE",
  SET_LIMIT: "product/SET_LIMIT",
  SET_OFFSET: "product/SET_OFFSET",
  SET_FILTER: "product/SET_FILTER",
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productActionTypes.SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case productActionTypes.SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };

    case productActionTypes.SET_TOTAL:
      return { ...state, total: action.payload };

    case productActionTypes.SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };

    case productActionTypes.SET_LIMIT:
      return { ...state, limit: action.payload };

    case productActionTypes.SET_OFFSET:
      return { ...state, offset: action.payload };

    case productActionTypes.SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}

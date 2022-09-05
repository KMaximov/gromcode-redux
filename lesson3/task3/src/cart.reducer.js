import { ADD_CART, REMOVE_CART } from "./cart.actions";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CART: {
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    }
    case REMOVE_CART: {
      const newProducts = state.products.filter(product => product.id !== action.payload)
      return {
        ...state,
        products: newProducts,
      };
    }
    default: 
      return state;
  }
};

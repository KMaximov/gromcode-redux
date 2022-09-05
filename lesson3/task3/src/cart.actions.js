export const ADD_CART = 'CART/ADD_CART';
export const REMOVE_CART = 'CART/REMOVE_CART';

export const addProduct = ({ id, name }) => {
  return {
    type: ADD_CART,
    payload: {
      id,
      name,
    },
  };
};

export const removeProduct = id => ({ type: REMOVE_CART, payload: id, });

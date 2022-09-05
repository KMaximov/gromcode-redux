import { SET_LANGUAGE } from "./langruage.actions";

const initialState = {
  language: 'en',
};

export const languageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }  
};

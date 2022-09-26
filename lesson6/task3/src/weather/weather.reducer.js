import { WEATHER_DATA_RECIEVED } from "./weather.actions";

const initialState = {
  weatherList: [],
};

export const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case WEATHER_DATA_RECIEVED:
      return {
        ...state,
        weatherList: action.payload.weatherData,
      };
      default:
        return state;
  };
};

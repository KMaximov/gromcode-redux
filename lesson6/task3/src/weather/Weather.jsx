import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { weatherDataListSelector } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ weatherDataList, getWeatherData }) => {
  getWeatherData();
  return (
    <>
      <h1 className='weather__title'>Weather data</h1>
      <ul className='cities-list'>
        {weatherDataList.map(city => {
          return (
            <li className='city' key={city.id}>
              <span className='city__name'>{city.name}</span>
              <span className='city__temperature'>{city.temperature}</span>
            </li>
          )
        })}
      </ul>
    </>
  );
};

Weather.propTypes = {
  weatherDataList: PropTypes.array.isRequired,
  getWeatherData: PropTypes.func.isRequired,
}

const mapState = state => {
  return {
    weatherDataList: weatherDataListSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.fetchWeatherData,
};

const connector = connect(mapState, mapDispatch);

export default connector(Weather);

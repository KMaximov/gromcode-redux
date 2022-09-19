import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../counter.actions';

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className='counter'>
      <button 
        className='counter__button'
        onClick={decrement}  
      >
        -
      </button>
      <span className='counter__value' onClick={reset}>
        {counter}
      </span>
      <button 
        className='counter__button'
        onClick={increment}  
      >
        +
      </button>
    </div>
  )
};

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
}

const mapState = state => ({
    counter: state,
});

const connector = connect(mapState, mapDispatch); //ф-я яка приймає компонент та добавляє деякий функціонал або якісь дані та повертає компоненту

export default connector(Counter);

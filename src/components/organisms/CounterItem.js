import React, { useCallback, useContext, useReducer } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, DecrementIcon, IncrementIcon } from '../atoms';
import './CounterItem.css'

export const CounterItem = ({ item }) => {

  const { incrementCounter, decrementCounter } = useContext(CountersContext);

  const handleDecrement = useCallback(() => {
    decrementCounter(item.id)
  })

  const handleIncrement = useCallback(() => {
    incrementCounter(item.id)
  })

  return (
      <div className='row item-row'>
        <div className='col-8 col-sm-6 col-xl-9 text-start'>
          {item.title}
        </div>
        <div className='col-4 col-sm-6 col-xl-3'>
          <div className='row'>
            <Button className='col' kind='flat' color='white' size='small' disabled={!item.count} onClick={handleDecrement}>
              <DecrementIcon />
            </Button>
            <div className='col'><strong>{item.count}</strong></div>
            <Button className='col' kind='flat' color='white' size='small' onClick={handleIncrement}>
              <IncrementIcon />
            </Button>
          </div>
        </div>

      </div>
  );
};

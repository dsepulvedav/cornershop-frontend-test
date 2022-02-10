import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, DecrementIcon, IncrementIcon } from '../atoms';
import './CounterItem.css'
import classnames from 'classnames';

export const CounterItem = ({ item }) => {

  const [ isSelected, setIsSelected ] = useState(false)
  const { incrementCounter, decrementCounter, state, selectCounter, deselectCounter } = useContext(CountersContext);

  useEffect(() => {
    setIsSelected(state.selectedCounters?.some(counter => counter.id === item.id))
  }, [JSON.stringify(state.selectedCounters)])

  const handleDecrement = useCallback(() => {
    decrementCounter(item.id)
  })

  const handleIncrement = useCallback(() => {
    incrementCounter(item.id)
  })

  const handleItemClick = useCallback(() => {
    if (isSelected) {
      deselectCounter(item)
    } else {
      selectCounter(item)
    }
  })

  const rowClasses = isSelected 
    ? classnames('row', 'item-row', 'selected') 
    : classnames('row', 'item-row');

  return (
      <div className={rowClasses} onClick={handleItemClick}>
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

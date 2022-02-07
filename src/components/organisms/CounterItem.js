import React, { useReducer } from 'react';
import { Button, DecrementIcon, IncrementIcon } from '../atoms';
import './CounterItem.css'

export const CounterItem = (props) => {
  const { 
    item,
    onItemIncrement,
    onItemDecrement 
  } = props;

  const counterReducer = (state, action) => {
    if (action.type === 'INCREMENT') {
      return {
        ...state,
        count: state.count + 1
      }
    }

    if (action.type === 'DECREMENT') {
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count
      }
    }

    return state
  }
  
  const [counterState, dispatch] = useReducer(counterReducer, item);

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
    typeof onItemDecrement === 'function' && onItemDecrement(item)
  }

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
    typeof onItemIncrement === 'function' && onItemIncrement(item)
  }

  return (
      <div className='row item-row'>
        <div className='col-8 col-sm-6 col-xl-9 text-start'>
          {item.title}
        </div>
        <div className='col-4 col-sm-6 col-xl-3'>
          <div className='row'>
            <Button className='col' kind='flat' color='white' size='small' disabled={!counterState.count} onClick={handleDecrement}>
              <DecrementIcon />
            </Button>
            <div className='col'><strong>{counterState.count}</strong></div>
            <Button className='col' kind='flat' color='white' size='small' onClick={handleIncrement}>
              <IncrementIcon />
            </Button>
          </div>
        </div>

      </div>
  );
};

import React, { useReducer } from 'react';
import { Button, DecrementIcon, IncrementIcon } from '../atoms';

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
        count: state.count === 1 ? state.count - 1 : state.count
      }
    }

    return state
  }
  
  const [counterState, dispatch] = useReducer(counterReducer, item);

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
    onItemDecrement(item)
  }

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
    onItemIncrement(item)
  }

  return (
      <div key={item.id} className='row'>
        <div>
          {item.title}
        </div>
        <div>
          <Button onClick={handleDecrement}>
            <DecrementIcon />
          </Button>
          {item.count}
          <Button onClick={handleIncrement}>
            <IncrementIcon />
          </Button>
        </div>

      </div>
  );
};

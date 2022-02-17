import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, DecrementIcon, IncrementIcon, useAlert } from '../atoms';
import './CounterItem.css'
import classnames from 'classnames';
import { NoConnectionAlert } from '../molecules';

export const CounterItem = ({ item }) => {

  const [ isSelected, setIsSelected ] = useState(false)
  const { incrementCounter, decrementCounter, state, selectCounter, deselectCounter } = useContext(CountersContext);
  const { isVisible: isAlertVisible, hideAlert, showAlert } = useAlert()

  const [retryAction, setRetryAction] = useState(null)
  const [alertTitle, setAlertTitle] = useState(null)

  useEffect(() => {
    setIsSelected(state.selectedCounters?.some(counter => counter.id === item.id))
  }, [JSON.stringify(state.selectedCounters)])

  const handleDecrement = useCallback(async() => {
    const result = await decrementCounter(item.id)
    if (!result) {
      setRetryAction('decrement')
+      setAlertTitle(`Couldn't update "${item.title}" to ${item.count - 1}`)
      showAlert() 
    }
  })

  const handleIncrement = useCallback(async() => {
    const result = await incrementCounter(item.id)
    if (!result) {
      setRetryAction('increment')
      setAlertTitle(`Couldn't update "${item.title}" to ${item.count + 1}`)
      showAlert() 
    }
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
        <NoConnectionAlert 
          isVisible={isAlertVisible}
          incrementAction={handleIncrement}
          decrementAction={handleDecrement}
          retryAction={retryAction} 
          onClose={hideAlert} 
          title={alertTitle}
        />

      </div>
  );
};

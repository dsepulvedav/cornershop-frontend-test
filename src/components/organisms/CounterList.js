import React, { useContext, useEffect, useState } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { ItemsSummary } from '../molecules/ItemsSummary';
import { CounterItem } from './CounterItem';
import classnames from 'classnames';

export const CounterList = () => {
  const { state } = useContext(CountersContext);

  const [items, setItems] = useState(state.counters)

  useEffect(() => {
    if (state.searchBarTerm) {
      setItems(state.counters.filter(counter => counter.title.includes(state.searchBarTerm)))
    } else {
      setItems(state.counters)
    }
  }, [state.searchBarTerm, JSON.stringify(state.counters)])

  const listColClasses = classnames('col', {'my-auto': items.length === 0})
  const listRowClasses = classnames('row', {'h-100': items.length === 0})

  return (
    <>
      <div className='row'>
        <div className='col'>
          {items?.length !== 0 && <ItemsSummary items={items}/>}
        </div>
      </div>
      <div className={listRowClasses}>
        <div className={listColClasses}>
          {items.map(item => 
            <CounterItem key={item.id} item={item} />
          )}
          {items.length === 0 && <div className='my-auto'>No results</div>}
        </div>
      </div>
    </>
    

  )
};

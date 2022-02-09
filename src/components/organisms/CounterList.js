import React from 'react';
import { ItemsSummary } from '../molecules/ItemsSummary';
import { CounterItem } from './CounterItem';

export const CounterList = (props) => {
  const { items } = props;

  return (
    <>
      <div className='row'>
        <div className='col'>
          {items?.length !== 0 && <ItemsSummary items={items}/>}
        </div>
      </div>
      <div className='row'>
      <div className='col'>
        {items.map(item => 
          <CounterItem key={item.id} item={item} />
        )}
      </div>
    </div>
    </>
    

  )
};

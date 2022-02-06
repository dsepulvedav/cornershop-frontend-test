import React from 'react';
import { ItemsSummary } from '../molecules/ItemsSummary';
import { CounterItem } from './CounterItem';

export const CounterList = (props) => {
  const { items } = props;

  return (
    <>
      <div className='row'>
        <div className='col'>
          <ItemsSummary />
        </div>
      </div>
      <div className='row'>
      <div className='col'>
        {items.map(item => {
          <CounterItem item={item} />
        })}
      </div>
    </div>
    </>
    

  )
};

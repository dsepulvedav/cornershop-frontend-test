import React, { useContext, useEffect, useState } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, RefreshIcon } from '../atoms';

export const ItemsSummary = ({ items }) => {

  const [times, setTimes] = useState(0);

  const { loadCounters, state } = useContext(CountersContext)

  useEffect(() => {
    if (items && items.length) {
      setTimes(items.map(item => item.count).reduce((a, b) => a + b))
    }
  })

  const handleRefreshClick = () => {
    loadCounters()
  }

  return (
    <div className='d-flex flex-row'>
      <div className='me-2 fw-bold'>{items.length} items</div>
      <div>{times} times</div>
      <div>
        <Button className='col' kind='flat' color='white' size='small' onClick={handleRefreshClick}>
          <RefreshIcon fill={state.loading ? 'var(--app-tint)' : undefined} />
        </Button>
      </div>
      {state.loading && <div style={{color: 'var(--app-tint)'}}>Refreshing...</div>}
    </div>
  );
};

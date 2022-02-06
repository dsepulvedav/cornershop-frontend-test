import React from 'react';

export const LoadingError = () => {
  return <div className='text-center'>
    <h3>Couldn’t load the counters</h3>
    <p>The Internet connection appears to be offline.</p>
    <Button color="white">Retry</Button>
  </div>
};

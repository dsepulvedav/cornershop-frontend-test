import React from 'react';
import { WelcomeMessage } from '../molecules/WelcomeMessage';

export const WelcomeScreenTemplate = () => {
  return (
    <div className='container d-flex h-100 min-vh-100 px-5'>
      <div className='m-auto'>
        <WelcomeMessage />
      </div>
    </div>);
};

import React from 'react';
import { Button } from '../atoms';
import { ReactComponent as Logo } from '../../logo.svg';

export const WelcomeMessage = () => {
  return (
    <div className='text-center'>
      <div className='row mb-5'>
        <Logo />
      </div>
      <div className='row mt-5'>
        <div className='col'>
          <h2>Welcome to Counters</h2>
          <p className='mb-5'>Capture cups of lattes, frapuccinos, or anything else that can be counted.</p>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col'>
          <Button>Get started</Button>
        </div>
      </div>
    </div>
  );
};

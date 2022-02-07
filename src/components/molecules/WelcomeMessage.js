import React from 'react';
import { Button } from '../atoms';
import { ReactComponent as Logo } from '../../logo.svg';
import { useNavigate } from 'react-router-dom';

export const WelcomeMessage = (props) => {
  const navigate = useNavigate();

  const redirectTo = () => {
    navigate(props.redirectTo);
  };

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
          <Button onClick={redirectTo}>Get started</Button>
        </div>
      </div>
    </div>
  );
};

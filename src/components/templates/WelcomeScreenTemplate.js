import React from 'react';
import { AppRoutes } from '../../routes/routes';
import { WelcomeMessage } from '../molecules/WelcomeMessage';

export const WelcomeScreenTemplate = () => {
  return (
    <div className='container d-flex h-100 min-vh-100 px-5'>
      <div className='m-auto'>
        <WelcomeMessage redirectTo={AppRoutes.Home}/>
      </div>
    </div>);
};

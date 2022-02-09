import React from 'react';
import { MainScreenTemplate } from '../components/templates/MainScreenTemplate';
import { CountersProvider } from '../contexts/CountersContext';

export const MainScreen = () => {

  return (
    <CountersProvider>
      <MainScreenTemplate />
    </CountersProvider>
  )
};

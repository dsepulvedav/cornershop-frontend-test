import React, { useEffect } from 'react';
import { MainScreenTemplate } from '../components/templates/MainScreenTemplate';
import { useFetch } from '../hooks/useFetch';

export const MainScreen = () => {

  const [data, loading, error] = useFetch('/api/v1/counter')

  return <MainScreenTemplate
    data={data}
    loading={loading}
    error={error}
  />;
};

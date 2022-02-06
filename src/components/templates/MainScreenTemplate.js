import React from 'react';
import { Button, Loading, NewIcon } from '../atoms';
import { LoadingError } from '../molecules/LoadingError';
import { NoCountersMessage } from '../molecules/NoCountersMessage';
import { SearchBar } from '../molecules/SearchBar';
import { CounterList } from '../organisms/CounterList';

export const MainScreenTemplate = (props) => {
  const { data, loading, error } = props

  return (
    <div className='d-flex flex-column vh-100 py-3'>
      <header className='row'>
        <div className='col' />
        <div className='col-6 px-5'>
          <SearchBar />
        </div>
        <div className='col' />
      </header>
      <main className='container-fluid flex-fill py-3'>
        <div className='row h-100'>
          <div className='col' />
          <div className='col-6 px-5 my-auto text-center'>
            {loading && <Loading />}
            {!loading && error && <LoadingError />}
            {!loading && !error && !data.length && <NoCountersMessage />}
            {!loading && !error && data.length > 0 && <CounterList items={data}/>}
          </div>
          <div className='col' />
        </div>
      </main>
      <footer className='row'>
        <hr />
        <div className='col' />
        <div className='col-6 text-end'>
          <Button>
            <NewIcon fill="var(--white)" />
          </Button>
        </div>
        <div className='col' />
      </footer>
    </div>
  );
};

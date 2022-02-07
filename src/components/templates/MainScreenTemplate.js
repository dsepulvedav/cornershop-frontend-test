import React from 'react';
import { Button, Loading, NewIcon, useModal } from '../atoms';
import { LoadingError } from '../molecules/LoadingError';
import { NoCountersMessage } from '../molecules/NoCountersMessage';
import { SearchBar } from '../molecules/SearchBar';
import { CounterList } from '../organisms/CounterList';
import { CreateCounter } from '../organisms/CreateCounter';

export const MainScreenTemplate = (props) => {
  const { data, loading, error } = props

  const {isVisible: isModalVisible, hideModal, showModal} = useModal()

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
            {data && <CounterList items={data}/>}
          </div>
          <div className='col' />
        </div>
      </main>
      <footer className='row'>
        <hr />
        <div className='col' />
        <div className='col-6 text-end'>
          <Button onClick={showModal}>
            <NewIcon fill="var(--white)" />
          </Button>
          <CreateCounter isVisible={isModalVisible} onClose={hideModal} />
        </div>
        <div className='col' />
      </footer>
    </div>
  );
};

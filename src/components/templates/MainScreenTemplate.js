import React, { useContext } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, Loading, NewIcon, useModal } from '../atoms';
import { LoadingError } from '../molecules/LoadingError';
import { NoCountersMessage } from '../molecules/NoCountersMessage';
import { SearchBar } from '../molecules/SearchBar';
import { CounterList } from '../organisms/CounterList';
import { CreateCounter } from '../organisms/CreateCounter';

export const MainScreenTemplate = () => {

  const { state } = useContext(CountersContext)

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
            {state.loading && state.counters?.length === 0 && <Loading />}
            {state.error && <LoadingError />}
            {!state.counters?.length && <NoCountersMessage />}
            {state.counters && <CounterList items={state.counters}/>}
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

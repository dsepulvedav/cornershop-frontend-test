import React, { useContext } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, Loading, NewIcon, ShareIcon, TrashBinIcon, useAlert, useModal } from '../atoms';
import { LoadingError } from '../molecules/LoadingError';
import { NoCountersMessage } from '../molecules/NoCountersMessage';
import { SearchBar } from '../molecules/SearchBar';
import { CounterList } from '../organisms/CounterList';
import { CreateCounter } from '../organisms/CreateCounter';
import { DeleteCounter } from '../organisms/DeleteCounter';

export const MainScreenTemplate = () => {

  const { state } = useContext(CountersContext)

  const { isVisible: isModalVisible, hideModal, showModal } = useModal()
  const { isVisible: isAlertVisible, hideAlert, showAlert } = useAlert();


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
          <div className='d-flex flex-row-reverse'>
            <Button onClick={showModal}>
              <NewIcon fill="var(--white)" />
            </Button>
            {state.selectedCounters.length > 0 &&
            <>
              <Button className='me-auto' color='white' onClick={showModal}>
                <ShareIcon />
              </Button>
              <Button className='me-2' color="white" onClick={showAlert}>
                <TrashBinIcon fill="var(--destructive-red)" />
              </Button>
            </>
            }
            
          </div>
          <CreateCounter isVisible={isModalVisible} onClose={hideModal} />
          <DeleteCounter isVisible={isAlertVisible} onClose={hideAlert} />
        </div>
        <div className='col' />
      </footer>
    </div>
  );
};

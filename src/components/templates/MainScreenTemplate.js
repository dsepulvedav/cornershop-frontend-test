import React, { useContext, useEffect, useState } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, Loading, NewIcon, ShareIcon, TrashBinIcon, useAlert, useModal } from '../atoms';
import { LoadingError } from '../molecules/LoadingError';
import { NoCountersMessage } from '../molecules/NoCountersMessage';
import { SearchBar } from '../molecules/SearchBar';
import { CounterList } from '../organisms/CounterList';
import { CreateCounter } from '../organisms/CreateCounter';
import { DeleteCounter } from '../molecules/DeleteCounter';
import classnames from 'classnames';

export const MainScreenTemplate = () => {

  const { state, setSearchTerm, setSearchFocused } = useContext(CountersContext)

  const { isVisible: isModalVisible, hideModal, showModal } = useModal()
  const { isVisible: isAlertVisible, hideAlert, showAlert } = useAlert();

  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(false)

  useEffect(() => {
    setShouldRenderOverlay(state.searchBarFocused && !state.searchBarTerm)
  }, [
    state.searchBarFocused,
    state.searchBarTerm
  ])

  const mainContainerClasses = classnames('col-12', 'col-sm-8', 'col-md-8', 'col-lg-6', 'px-3', 'text-center', 'position-relative', {'my-auto': state.counters?.length === 0})
  const overlayClasses = classnames('overlay', {'d-block': shouldRenderOverlay})

  return (
    <div className='d-flex flex-column vh-100 py-3'>
      <header className='row mx-0'>
        <div className='col-0 col-sm-2 col-md-2 col-lg-3' />
        <div className='col-12 col-sm-8 col-md-8 col-lg-6 px-3'>
          <SearchBar onChange={setSearchTerm} onFocusChange={setSearchFocused}/>
        </div>
        <div className='col-0 col-sm-2 col-md-2 col-lg-3' />
      </header>
      <main className='container-fluid flex-fill py-4 position-relative'>
        <div className='row h-100'>
          <div className='col-0 col-sm-2 col-md-2 col-lg-3 d-none d-sm-block' />
          <div className={mainContainerClasses}>
            <div className={overlayClasses}></div>
            {state.loading && state.counters?.length === 0 && <Loading />}
            {state.error && <LoadingError />}
            {!state.counters?.length && <NoCountersMessage />}
            {state.counters && <CounterList />}
          </div>
          <div className='col-0 col-sm-2 col-md-2 col-lg-3 d-none d-sm-block' />
        </div>
      </main>
      <footer className='row mx-0'>
        <hr />
        <div className='col-0 col-sm-2 col-md-2 col-lg-3 d-none d-sm-block' />
        <div className='col-12 col-sm-8 col-md-8 col-lg-6 px-3 text-end'>
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
        <div className='col-0 col-sm-2 col-md-2 col-lg-3 d-none d-sm-block' />
      </footer>
    </div>
  );
};

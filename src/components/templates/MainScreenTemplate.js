import React from 'react';
import { Button } from '../atoms';
import { SearchBar } from '../molecules/SearchBar';

export const MainScreenTemplate = () => {
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
        <div className='row'>
          <div className='col' />
          <div className='col-6 px-5'>
            asdf
          </div>
          <div className='col' />
        </div>
      </main>
      <footer className='row'>
        <hr />
        <div className='col' />
        <div className='col-6 text-end'>
          <Button>+</Button>
        </div>
        <div className='col' />
      </footer>
    </div>
  );
};

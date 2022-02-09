import React from 'react';
import { Input } from '../atoms';

export const SearchBar = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value)
  };

  return (
    <div>
      <Input placeholder="Search Counters" onChange={handleInputChange}/>
    </div>);
};

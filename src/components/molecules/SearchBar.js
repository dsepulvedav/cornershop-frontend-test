import React from 'react';
import { Input } from '../atoms';

export const SearchBar = ({ onChange,onFocusChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value)
  };

  const handleInputFocus = () => {
    onFocusChange(true)
  }

  const handleInputBlur = () => {
    onFocusChange(false)
  }

  return (
    <div>
      <Input 
        placeholder="Search Counters"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>);
};

import React, { useEffect, useState } from 'react';
import { Button, Input } from '../atoms';

export const SearchBar = ({ onChange, onFocusChange }) => {

  const [query, setQuery] = useState('')
  const [shouldRenderCancel, setShouldRenderCancel] = useState(false)

  const handleInputChange = (event) => {
    const { value } = event.target
    setQuery(value)
  };

  const handleInputFocus = () => {
    onFocusChange(true)
    setShouldRenderCancel(true)
  }

  const handleInputBlur = () => {
    if (!query) {
      setTimeout(() => {setShouldRenderCancel(false)}, 40)
    }
    onFocusChange(false)
  }

  const handleCancelClick = () => {
    setQuery('')
    setShouldRenderCancel(false)
  }

  useEffect(() => {
    onChange(query)
  }, [query])

  return (
    <div className='d-flex flex-row'>
      <Input
        value={query}
        placeholder="Search Counters"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {shouldRenderCancel && <Button color='white' className='ms-2' onClick={handleCancelClick}>Cancel</Button>}
    </div>
    )
}

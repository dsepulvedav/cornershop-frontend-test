import React, { useState } from 'react';
import { Button, CloseIcon, Input, Modal } from '../atoms';

export const CreateCounter = (props) => {
  
  const { isVisible, onClose } = props
  const [newCounter, setNewCounter] = useState(null);

  const handleInputChange = (event) => {
    setNewCounter(event.target.value)
  }

  const handleSaveButtonClick = async () => {
    const requestBody = {
      title: newCounter
    }

    const response = await fetch('/api/v1/counter', { 
      method: 'POST', 
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)})
    console.log({response})
  }

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
      onOpen={() => console.log('Modal was opened')}
    >
      <Modal.Header>
        <Button color="white" onClick={onClose}><CloseIcon /></Button>
        <Modal.Title>
          Create counter
        </Modal.Title>
        <Button 
          disabled={!newCounter}
          onClick={handleSaveButtonClick}
        >Save</Button>
      </Modal.Header>
      <Modal.Body>
        <Input placeholder="Cups of coffee" onChange={handleInputChange} />
        <p>Give it a name. Creative block? See examples.</p>
      </Modal.Body>
    </Modal>
  );
};

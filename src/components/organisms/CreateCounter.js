import React, { useContext, useState } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, CloseIcon, Input, Modal } from '../atoms';

export const CreateCounter = (props) => {
  
  const { isVisible, onClose } = props
  const [newCounter, setNewCounter] = useState(null);

  const { addCounter } = useContext(CountersContext)

  const handleInputChange = (event) => {
    setNewCounter(event.target.value)
  }
  
  const handleSaveButtonClick = async () => {
    addCounter(newCounter)
    onClose()
  }

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
      onOpen={() => console.log('Modal was opened')}
    >
      <Modal.Header>
        <div className='d-flex flex-row align-items-center'>

          <Button 
            kind='flat'
            color='white' 
            size='small'
            className='p-0 pe-3'
            onClick={onClose}
          ><CloseIcon /></Button>
          <Modal.Title className='me-auto'>
            Create counter
          </Modal.Title>
          <Button 
            disabled={!newCounter}
            onClick={handleSaveButtonClick}
          >Save</Button>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Input placeholder="Cups of coffee" onChange={handleInputChange} />
        <p>Give it a name. Creative block? See examples.</p>
      </Modal.Body>
    </Modal>
  );
};

import React, { useContext, useState } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, CloseIcon, Input, Modal, useModal } from '../atoms';
import { CounterExamples } from './CounterExamples';

export const CreateCounter = (props) => {
  
  const { isVisible, onClose } = props
  const [newCounter, setNewCounter] = useState(null);

  const { addCounter } = useContext(CountersContext)
  const {isVisible: isModalVisible, hideModal, showModal} = useModal()

  const handleInputChange = (event) => {
    setNewCounter(event.target.value)
  }
  
  const handleSaveButtonClick = () => {
    addCounter(newCounter)
    onClose()
  }

  const handleExampleClick = () => {
    showModal()
  }

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
    >
      <Modal.Header>
        <div className='d-flex flex-row align-items-center'>

          <Button 
            kind='flat'
            color='white' 
            size='small'
            className='p-0 me-3'
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
        <p className='create-modal-hint'>Give it a name. Creative block? See <a href="javascript:void(0)" onClick={handleExampleClick}>examples</a>.</p>
      </Modal.Body>
      <CounterExamples isVisible={isModalVisible} onClose={hideModal} onExampleClick={onClose}/>
    </Modal>
  );
};

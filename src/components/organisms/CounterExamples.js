import React, { useContext } from 'react';
import { CountersContext } from '../../contexts/CountersContext';
import { Button, CloseIcon, Modal } from '../atoms';

export const CounterExamples = (props) => {
  
  const { isVisible, onClose, onExampleClick } = props
  const { addCounter } = useContext(CountersContext)

  const examples = [
    { 
      category: 'Drinks',
      items: ['Cups of coffee', 'Glasses of water', 'Martinis']
    },
    { 
      category: 'Food',
      items: ['Hot-dogs', 'Cupcakes eaten', 'Chicken wings']
    },
    { 
      category: 'Misc',
      items: ['Times sneezed', 'Naps', 'Day dreaming']
    }
  ]

  const handleExampleClick = async (title) => {
    addCounter(title)
    typeof onExampleClick === 'function' && onExampleClick()
    onClose()
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
            Examples
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <p className='create-modal-hint'>Select an example to add it to your counters.</p>
        {examples.map(example => (
          <div className='mt-4'>
            <div className='row mb-2'>
              <div className='col example-category'>
                {example.category}
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='d-flex flex-row'>
                  {example.items.map(item => (
                    <Button
                      className='me-2'
                      kind="badge"
                      color="smoke"
                      onClick={() => handleExampleClick(item)}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        ))}
      </Modal.Body>
    </Modal>
  );
};

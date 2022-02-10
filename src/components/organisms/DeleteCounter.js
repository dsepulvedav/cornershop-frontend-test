import React, { useCallback, useContext, useEffect, useState } from 'react'
import { CountersContext } from '../../contexts/CountersContext'
import { Alert, Button } from '../atoms'

export const DeleteCounter = ({isVisible, onClose}) => {

  const [alertTitle, setAlertTitle] = useState(null)
  const { state, deleteCounter } = useContext(CountersContext)

  useEffect(() => {
    if (state.selectedCounters?.length > 1) {
      setAlertTitle(`Delete ${state.counters.length} counters?`)
    } else if (state.selectedCounters?.length === 1) {
      setAlertTitle(`Delete the "${state.selectedCounters[0].title}" counter?`)
    }
  }, [JSON.stringify(state.selectedCounters)])

  const handleDeleteClick = useCallback(() => {
    const {selectedCounters} = state
    for (let counter of selectedCounters) {
      deleteCounter(counter.id)
    }
    onClose()

  })

  return (
    <Alert
      isVisible={isVisible}
    >
      <Alert.Title>{alertTitle}</Alert.Title>
      <Alert.Message>This cannot be undone.</Alert.Message>
      <Alert.Actions>
      <Button kind="raised" onClick={onClose}>
          Cancel
      </Button>
      <Button kind="raised" color="danger" onClick={handleDeleteClick}>
          Delete
      </Button>
      </Alert.Actions>
    </Alert>
  )
}

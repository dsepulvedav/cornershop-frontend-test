import React, { useCallback } from 'react'
import { Alert, Button } from '../atoms'

export const NoConnectionAlert = ({isVisible, incrementAction, decrementAction, retryAction, onClose, title }) => {

  const handleRetryClick = useCallback(() => {
    if (retryAction === 'decrement') {
      decrementAction()
    } else if (retryAction === 'increment') {
      incrementAction()
    } else 
    onClose()
  })

  return (
    <Alert
      isVisible={isVisible}
    >
      <Alert.Title>{title}</Alert.Title>
      <Alert.Message>The Internet connection appears to be offline.</Alert.Message>
      <Alert.Actions>
      {retryAction != null && <Button kind="raised" onClick={handleRetryClick}>
          Retry
      </Button>}
      <Button kind="raised" color="white" onClick={onClose}>
          Dismiss
      </Button>
      </Alert.Actions>
    </Alert>
  )
}

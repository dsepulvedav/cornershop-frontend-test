import React, { useCallback } from 'react'
import { Alert, Button } from '../atoms'

export const NoConnectionAlert = ({isVisible, retryCallback, onClose, title }) => {

  const handleRetryClick = useCallback(() => {
    onClose()
  })

  return (
    <Alert
      isVisible={isVisible}
    >
      <Alert.Title>{title}</Alert.Title>
      <Alert.Message>The Internet connection appears to be offline.</Alert.Message>
      <Alert.Actions>
      {retryCallback != null && <Button kind="raised" onClick={handleRetryClick}>
          Retry
      </Button>}
      <Button kind="raised" color="white" onClick={onClose}>
          Dismiss
      </Button>
      </Alert.Actions>
    </Alert>
  )
}

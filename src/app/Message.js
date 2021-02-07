import React from 'react'
import { Alert } from 'reactstrap'

const Message = ({ message, css }) => {
  return (
      <div>
        <Alert color = {css || 'info'}>{message}</Alert>
      </div>
  )
}

export default Message

import React from 'react'
import { useHistory } from 'react-router-dom'

export default function () {
  const history = useHistory()
  const handleBack = () => {
    history.push('/')
  }

  return (
    <div>
      <p>About page</p>
      <div onClick={handleBack}>back to Home</div>
    </div>
  )
}

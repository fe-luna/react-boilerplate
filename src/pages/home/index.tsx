import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
      <p>Home page</p>
      <Link to='/about'>About</Link>
    </div>
  )
}

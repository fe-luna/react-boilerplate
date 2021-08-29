import React from 'react'
import { Link } from 'react-router-dom'
import './style'

export default function () {
  return (
    <div>
      <p className='title'>Home page</p>
      <Link to='/about'>About</Link>
    </div>
  )
}

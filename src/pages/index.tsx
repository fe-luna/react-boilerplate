import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './about'
import Home from './home'

export default function () {
  return (
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/' component={Home} />
    </Switch>
  )
}

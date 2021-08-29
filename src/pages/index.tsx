import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

export default function () {
  return (
    <Switch>
      <Route path='/about' component={loadable(() => import('./about'))} />
      <Route path='/' component={loadable(() => import('./home'))} />
    </Switch>
  )
}

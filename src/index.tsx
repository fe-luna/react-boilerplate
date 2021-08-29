import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Pages from './pages'

const App = (
  <BrowserRouter>
    <Pages />
  </BrowserRouter>
)
const root = document.getElementById('app')

ReactDOM.render(App, root)

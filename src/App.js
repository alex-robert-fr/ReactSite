import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project-1" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App

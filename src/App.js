import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import { Project1, Project2, Project3, Project4 } from './pages/Projects'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project-1" component={Project1} />
      <Route exact path="/project-2" component={Project2} />
      <Route exact path="/project-3" component={Project3} />
      <Route exact path="/project-4" component={Project4} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App

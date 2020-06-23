import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Landing from './Landing'
import MainNav from './MainNav'

const App = () => (
  <>
    <MainNav />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
    </Switch>
  </>
)

export default App

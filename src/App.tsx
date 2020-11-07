import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyLayout from './components/MyLayout'
import { Home, About, Dashboard } from './pages'

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
      <MyLayout />
    </Router>
  )
}

export default App

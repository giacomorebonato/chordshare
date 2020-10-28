import {
  AppBar,
  CssBaseline,
  makeStyles,
  Toolbar,
  IconButton,
  Fab,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About, Dashboard } from './pages'

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}))

const App: React.FC = () => {
  const classes = useStyles()

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
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='open drawer'>
            <MenuIcon />
          </IconButton>
          <Fab color='secondary' aria-label='add' className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton color='inherit'>
            <SearchIcon />
          </IconButton>
          <IconButton edge='end' color='inherit'>
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Router>
  )
}

export default App

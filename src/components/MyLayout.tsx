import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  makeStyles,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'

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

export const MyLayout: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles()
  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(
    () =>
      history.listen((location, action) => {
        setShowDrawer(false)
      }),
    [history]
  )

  return (
    <>
      <SwipeableDrawer
        anchor='left'
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        onOpen={() => setShowDrawer(true)}
      >
        <List>
          <ListItem button component={NavLink} to='/'>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem button component={NavLink} to='/dashboard'>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem button component={NavLink} to='/about'>
            <ListItemText primary='About' />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={() => setShowDrawer(true)}
          >
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
    </>
  )
}

export default withRouter(MyLayout)

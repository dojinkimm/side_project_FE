import React from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import logo from '../../assets/logo.svg';
import AppBar from '@material-ui/core/AppBar';

import { useStyles } from './style';

export function NavBar(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton>
          <Link
              to={{
                pathname: `/search`
              }}
            >
              <img src={logo} width={30} alt="logo" />
            </Link>
          </IconButton>

          <TextField
            className={classes.toolbarSearch}
            id="input-with-icon-textfield"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />

          <div className={classes.grow} />
          <div>
            <Button size="small">한국어(KR)</Button>
            <Button size="small">₩ KRW</Button>
            <Button size="small">Sign up</Button>
            <Button size="small">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

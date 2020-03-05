import React from 'react';
import './App.css';
import {YakList} from "./components/YakList.jsx"

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';

function App() {
  return (
    <div className="App">
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar className="bar">
                            <div>
                            <IconButton className="button" edge="start" color="inherit" aria-label="addPost">
                                <AddIcon />
                            </IconButton>
                            </div>
                            <div className="titleBar">
                            <Typography variant="h6">
                                New | Hot
                            </Typography>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs={6}>
                    <YakList/>
                </Grid>
                <Grid item xs={6}>
                    <YakList/>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

export default App;

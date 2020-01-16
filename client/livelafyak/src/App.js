import React from 'react';
import './App.css';
import {YakList} from "./components/YakList.jsx"

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
        <Container>
          <Grid container spacing={2}>
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

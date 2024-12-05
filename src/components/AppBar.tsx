import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

const AppBar: React.FC = () => (
  <MuiAppBar position="static" style={{ backgroundColor: '#4285F4' }}>
    <Toolbar>
      <Typography variant="h6" component="div">
        Locations App
      </Typography>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;

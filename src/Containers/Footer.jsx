import React from 'react';
import {
  AppBar, Toolbar, Typography, Container,
} from '@material-ui/core';

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Typography
        variant="body1"
        color="inherit"
        style={{
          borderRadius: '4px', border: '1px solid ', textAlign: 'center', margin: '20px', justifySelf: 'auto', flex: '1 1 100%',
        }}
      >
        <h4 style={{ margin: '5px' }}>SWAPI</h4>
      </Typography>
    </AppBar>
  );
}

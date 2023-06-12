import React from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Navbar = () => {
  return (
    <AppBar position="static">
        <Container maxWidth="sm">
        <Toolbar>         
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700}}>
            Your Bank 
          </Typography>         
        </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Navbar


//rafce :  react arrow function component export 
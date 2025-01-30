import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack direction='row'>
        <Link to='/'>Home</Link>
    </Stack>
  )
}

export default Navbar
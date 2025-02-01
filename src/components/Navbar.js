import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack direction='row' style={{margin:'0',borderBottom:'solid 1px grey'}} >
    <Link to='/' style={ {color:'rgb(255,0,234)',fontSize:'20px',fontWeight:'bold',fontFamily:'Google Sans',margin:'10px',textAlign:'center',textDecoration:'none'}}>Home</Link>
    </Stack>
  )
}

export default Navbar
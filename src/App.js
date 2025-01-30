import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Abs from './Pages/Abs';

const App = () => {
  return (
   <Box>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/abs' element={<Abs />} />
    </Routes>
   </Box>
  )
}

export default App
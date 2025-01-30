import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Abs from './Pages/Abs';
import Biceps from './Pages/Biceps';
import Calves from './Pages/Calves';
import Forearms from './Pages/Forearms';
import UpperBack from './Pages/UpperBack';
import Cardio from './Pages/Cardio';

const App = () => {
  return (
   <Box>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/abs' element={<Abs />} />
      <Route path='/biceps' element={<Biceps />} />
      <Route path='/calves' element={<Calves />} />
      <Route path='/forearms' element={<Forearms />} />
      <Route path='/upperback' element={<UpperBack />} />
      <Route path='/cardio' element={<Cardio />} />
    </Routes>
   </Box>
  )
}

export default App
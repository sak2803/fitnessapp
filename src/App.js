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
import Lats from './Pages/Lats';
import Tricep from './Pages/Tricep';
import Quads from './Pages/Quads';

const App = () => {
  return (
   <Box>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cardio' element={<Cardio />} />
      <Route path='/abs' element={<Abs />} />
      <Route path='/biceps' element={<Biceps />} />
      <Route path='/tricep' element={<Tricep />} />
      <Route path='/forearms' element={<Forearms />} />
      <Route path='/quads' element={<Quads />} />
      <Route path='/calves' element={<Calves />} />
      <Route path='/upperback' element={<UpperBack />} />
      <Route path='/lats' element={<Lats />} />
    </Routes>
   </Box>
  )
}

export default App
import React from 'react';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import Abs from '../assets/images/abs.jpg';
import Chest from '../assets/images/chest.jpg';
import Back from '../assets/images/back.jpg';
import Bicep from '../assets/images/bicep.jpg';


import './Home.css';

const Home = () => {
  return (
    <Box >
        <h2 style={{color:'white',textAlign:'center'}}>Exercises</h2>
        <div direction='row' className='displayDiv'>
            <Box className='exerciseCard'>
             <Link to='./abs'>
                <img src={Abs} alt='abs' className='exerciseTypeDisplayImg'/>
                <Typography>
                  Abs
                </Typography>
              </Link>
            </Box>
            <Box className='exerciseCard'>
             <Link to='./Biceps'>
                <img src={Bicep} alt='bicep' className='exerciseTypeDisplayImg'/>
                <Typography>
                 Biceps
                </Typography>
              </Link>
            </Box>
            <Box className='exerciseCard'>
             <Link to='./Calves'>
                <img src={Back} alt='back' className='exerciseTypeDisplayImg'/>
                <Typography>
                  Calves
                </Typography>
              </Link>
            </Box>
            <Box className='exerciseCard'>
             <Link to='./Forearms'>
                <img src={Back} alt='back' className='exerciseTypeDisplayImg'/>
                <Typography>
                  Forearms
                </Typography>
              </Link>
            </Box>
            <Box className='exerciseCard'>
             <Link to='./UpperBack'>
                <img src={Back} alt='back' className='exerciseTypeDisplayImg'/>
                <Typography>
                  Upper Back
                </Typography>
              </Link>
            </Box>
            <Box className='exerciseCard'>
             <Link to='./Cardio'>
                <img src={Back} alt='back' className='exerciseTypeDisplayImg'/>
                <Typography>
                  Cardio
                </Typography>
              </Link>
            </Box>
        </div>
    </Box>
  )
}

export default Home
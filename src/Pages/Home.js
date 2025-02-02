import React from 'react';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import Abs from '../assets/images/abs.jpg';
import Chest from '../assets/images/chest.jpg';
import Back from '../assets/images/back.jpg';
import Bicep from '../assets/images/bicep.jpg';
import Calves from '../assets/images/calves.jpg';
import Forearms from '../assets/images/forearm.jpg';
import UpperBack from '../assets/images/upperback.jpg';
import Cardio from '../assets/images/cardio.jpg';
import Lats from '../assets/images/lats.jpg';
import Tricep from '../assets/images/tricep.jpg';
import Quads from '../assets/images/quads.jpg';

import './Home.css';


const Home = () => {
  return (
    <Box style={{margin:'-10px'}}>
        <h2 className='pageTitle'>Exercises</h2>
        <div direction='row' className='displayDiv'>
            <Box className='HomeCard'>
             <Link to='./Cardio'>
                <img src={Cardio} alt='cardio' className='exerciseTypeDisplayImg'/>
                <Typography className='exerciseTypeDisplayText'>
                  Cardio
                </Typography>
              </Link>
            </Box>
            <Box className='HomeCard'>
             <Link to='./abs'>
                <img src={Abs} alt='abs' className='exerciseTypeDisplayImg'/>
                <Typography className='exerciseTypeDisplayText'>
                  Abs
                </Typography>
              </Link>
            </Box>
            <Box className='HomeCard'>
             <Link to='./Biceps'>
                <img src={Bicep} alt='bicep' className='exerciseTypeDisplayImg'/>
                <Typography className='exerciseTypeDisplayText'>
                 Biceps
                </Typography>
              </Link>
            </Box>
            <Box className='HomeCard'>
             <Link to='./Tricep'>
                <img src={Tricep} alt='tricep' className='exerciseTypeDisplayImg'/>
                <Typography className='exerciseTypeDisplayText'>
                  Tricep
                </Typography>
              </Link>
            </Box>
            <Box className='HomeCard'>
             <Link to='./Forearms'>
                <img src={Forearms} alt='forearms' className='exerciseTypeDisplayImg'/>
                <Typography className='exerciseTypeDisplayText'>
                  Forearms
                </Typography>
              </Link>
            </Box>
            <Box className='HomeCard'>
             <Link to='./Quads'>
                <img src={Quads} alt='quads' className='exerciseTypeDisplayImg'/>
                <Typography className='exerciseTypeDisplayText'>
                  Quads
                </Typography>
              </Link>
            </Box>
            <Box className='HomeCard'>
             <Link to='./Calves'>
                <img src={Calves} alt='calves' className='exerciseTypeDisplayImg'/>
                <Typography className='exerciseTypeDisplayText'>
                  Calves
                </Typography>
              </Link>
            </Box>
            <Box className='HomeCard'>
             <Link to='./UpperBack'>
                <img src={UpperBack} alt='upperback' className='exerciseTypeDisplayImg'/>
                <Typography className='exerciseTypeDisplayText'>
                  Upper Back
                </Typography>
              </Link>
            </Box>
            <Box className='HomeCard'>
             <Link to='./Lats'>
                <img src={Lats} alt='lats' className='exerciseTypeDisplayImg'/>
                <Typography className='exerciseTypeDisplayText'>
                  Lats
                </Typography>
              </Link>
            </Box>
        </div>
    </Box>
  )
}

export default Home
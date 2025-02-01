import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './ExerciseCard.css';

const capitalizeFirstLetters = (sentence) => {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

const ExerciseCard = ({ exercise }) => {
  //console.log('ExerciseCard received exercise:', exercise); // Log the exercise object

  if (!exercise) {
    return <div>No exercise data</div>; // Handle case where exercise is undefined or null
  }

  return (
    <Box className='cardContainer'>
      {exercise.map((exercise) => (
        <Box className='exerciseCard'>
          <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='exerciseGif' />
          <Typography className='exerciseName'>
            {capitalizeFirstLetters(exercise.name)}
          </Typography>
          <Typography className='exerciseEquipment'>
            {capitalizeFirstLetters(exercise.equipment)}
          </Typography>
          <Typography className='exerciseTarget'>
            Target - {capitalizeFirstLetters(exercise.target)}
          </Typography>
        </Box>
      ))}
    </Box>
    
  );


  /*
  <Box>
      {exercise.map((exercise) => {
        <Box className='exerciseCard'>
          <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='exerciseGif'/>
          <h4 className='exerciseName'>
            {capitalizeFirstLetters(exercise.name) }
          </h4>
          <p className='exerciseEquipment'>
            {capitalizeFirstLetters(exercise.equipment)}
          </p>
          <p style={{ color:'black',fontSize:'15px',backgroundColor:'rgb(255,0,234)',width:'220px',fontWeight:'bold'}} >
            Target - {exercise.target}
          </p>
        </Box> 
      })}
    </Box>
  */ 
  /* 
  <Box>
      {exercise.map((exercise) => (
        <Box className='exerciseCard'>
          <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='exerciseGif' />
          <Typography className='exerciseName'>
            {capitalizeFirstLetters(exercise.name)}
          </Typography>
          <Typography className='exerciseEquipment'>
            {capitalizeFirstLetters(exercise.equipment)}
          </Typography>
          <Typography style={{ color: 'white', fontSize: '12px' }}>
            Target - {capitalizeFirstLetters(exercise.target)}
          </Typography>
        </Box>
      ))}
    </Box>
  */


/*  <Box className='exerciseCard'>
         <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='exerciseGif'/>
          <h4 className='exerciseName'>
            {capitalizeFirstLetters(exercise[0].name) }
          </h4>
          <p className='exerciseEquipment'>
            {capitalizeFirstLetters(exercise[0].equipment)}
          </p>
          <p style={{ color:'black',fontSize:'15px',backgroundColor:'rgb(255,0,234)',width:'220px',fontWeight:'bold'}} >
            Target - {exercise[0].target}
          </p>
      </Box>   */
  
}

export default ExerciseCard;
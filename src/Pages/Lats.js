import React, { useEffect, useState } from 'react';
import { fetchData, options } from '../utils/fetchData';
import Box from '@mui/material/Box';

import ExerciseCard from '../components/ExerciseCard';
import './excercisePages.css';

const Lats = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/target/lats', options);
        setData(data);
    };

      fetchExerciseData();
  }, []);
//  console.log(data);

  return (
    <Box>
      <h1 className='excerciseName'>Lats Exercises</h1>
    <ExerciseCard exercise={data} />
    </Box>
    
  )
}

export default Lats
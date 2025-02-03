import React, { useEffect, useState } from 'react';
import { fetchData, options } from '../utils/fetchData';
import Box from '@mui/material/Box';

import ExerciseCard from '../components/ExerciseCard';
import './excercisePages.css';

const Tricep = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/target/triceps', options);
        setData(data);
    };

      fetchExerciseData();
  }, []);
//  console.log(data);

  return (
    <Box>
      <h1 className='excerciseName'>Tricep Exercises</h1>
    <ExerciseCard exercise={data} />
    </Box>
    
  )
}

export default Tricep
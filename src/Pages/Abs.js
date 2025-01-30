import React, { useEffect, useState } from 'react';
import { fetchData, options } from '../utils/fetchData';

import ExerciseCard from '../components/ExerciseCard';

const Abs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio', options);
        setData(data);
    };

      fetchExerciseData();
  }, []);

  console.log(data);

  return (
    <ExerciseCard exercise={data} />
    
  )
}

export default Abs
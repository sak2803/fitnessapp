export const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/status',
    headers: {
      'x-rapidapi-key': 'a08dadf04dmsh843b08eb2127a63p1e882ajsn4bb9132162d8',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
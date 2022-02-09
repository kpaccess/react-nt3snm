import React, { useState, useEffect } from 'react';

// geting API response using async awai
async function getAPIResponse(endpoint) {
  const response = await fetch(endpoint);
  return response.json();
}

export const FetchExample = () => {
  const API_URL = 'https://starwars.egghead.training';

  const [films, setFilms] = useState('');

  useEffect(async () => {
    const API = API_URL + '/films';

    // fetch(API)
    //   .then(res => res.json())
    //   .then(data => setFilms(data))
    //   .catch(error => console.log(error));

    getAPIResponse(API)
      .then(data => setFilms(data))
      .catch(error => console.log(error));
  }, []);

  const displayData =
    films &&
    films.map(film => {
      return (
        <tr key={film.title}>
          <td>{film.episode_id}</td>
          <td>{film.title}</td>
        </tr>
      );
    });

  const handleSort = () => {
    const sorted = [...films].sort((a, b) => a.episode_id - b.episode_id);
    setFilms(sorted);
  };

  return (
    <div>
      <h2>Fetch Example</h2>
      <table border="1">
        <tr>
          <td onClick={handleSort}>Movies</td>
          <td>Title</td>
        </tr>
        {displayData}
      </table>
    </div>
  );
};

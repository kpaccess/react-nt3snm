import React, { useState, useEffect } from 'react';
import './style.css';

export const WithCSSFlex = () => {
  const API_URL = 'https://starwars.egghead.training';

  const [films, setFilms] = useState('');

  useEffect(() => {
    const API = API_URL + '/films';

    fetch(API)
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(error => console.log(error));
  }, []);

  const displayData =
    films &&
    films.map(film => {
      return (
        <div key={film.title} className="row">
          <div className="col">{film.episode_id}</div>
          <div className="col">{film.title}</div>
        </div>
      );
    });

  const handleSort = () => {
    const sorted = [...films].sort((a, b) => a.episode_id - b.episode_id);
    setFilms(sorted);
  };

  return (
    <div>
      <h2>Display Fetch Example using CSS Flex</h2>
      <section>
        <header>
          <h3 className="col">Movies</h3>
          <h3 className="col">Title</h3>
        </header>
        {displayData}
      </section>
    </div>
  );
};

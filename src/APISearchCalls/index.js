import React, { useState, useEffect } from 'react';

// https://www.youtube.com/watch?v=HQq5Sod8AEk

async function fetchAPIResponse(url) {
  const response = await fetch(url);
  return response.json();
}

export default function ApiSearch() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');

  useEffect(() => {
    const apikey = 'CSE0mOYioxAwd50KpzBbA7pwPZj6EzKk';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&&q=${query}&&limit=20`;

    const result = fetchAPIResponse(apiUrl);
    result
      .then(output => {
        const data = output.data;
        setResults(data);
      })
      .catch(err => console.log(err));
  }, [query]);

  const onSubmit = event => {
    event.preventDefault();
    setQuery(event.target.elements.search.value);
  };
  const handleChange = e => setSearch(e.target.value);

  return (
    <div className="App">
      <h1>Async React Hooks</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search for Gifs"
            name="search"
          />
          <button type="submit">Search</button>

          {results &&
            results.map(item => (
              <video key={item} src={item && item.images.downsized_small.mp4} />
            ))}
        </form>
      </div>
    </div>
  );
}

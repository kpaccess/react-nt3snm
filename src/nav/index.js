import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/fetchExample">FetchExample</Link>
      </li>
    </ul>
  );
};

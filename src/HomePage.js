import React from 'react';
import {Route,Link} from 'react-router-dom';

function HomePage() {
  return (
    <h1>
      <Link to='/'>Noteful</Link>
    </h1>
  );
}

export default HomePage;
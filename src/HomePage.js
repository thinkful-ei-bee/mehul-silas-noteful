import React from 'react';
import {Route,Link} from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Link to='/'>Notes</Link>
    </div>
  );
}

export default HomePage;
import React from 'react';
import {Route,Link} from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Link to='/Folder'>Poem List</Link>
      <p>We routed here</p>
    </div>
  );
}

export default HomePage;
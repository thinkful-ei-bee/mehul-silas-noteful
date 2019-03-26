import React from 'react';
import {Route,Link} from 'react-router-dom';

class HomePage extends React.Component {
  
  render(){  
  return (
    <h1>
      <Link to='/' onClick={() => this.props.changeOrigin(true)}>Noteful</Link>
    </h1>
  );
}
}
export default HomePage;
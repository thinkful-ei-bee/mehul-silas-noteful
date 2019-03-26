import React from 'react';
import {Route,Link} from 'react-router-dom';

class HomePage extends React.Component {
  
  render(){  
  return (
    <div>
      <Link to='/' onClick={() => this.props.changeOrigin(true)}>Notes</Link>
    </div>
  );
}
}
export default HomePage;
import React from 'react';
import HomePage from './HomePage'
import {Route,Link, NavLink} from 'react-router-dom';
import './Folder.css';

class Folder extends React.Component  {    

  
  render(){
    console.log(this.props.changeOrigin);
    return ( 
      <li key={this.props.folderid}>         
        <NavLink onClick={() =>this.props.changeOrigin(false)} to={`/Folder/${this.props.folderid}`}>
        {this.props.folderName}</NavLink>
      </li>
    );
  }
}

export default Folder;
import React from 'react';
import HomePage from './HomePage'
import {Route,Link, NavLink} from 'react-router-dom';
import './Folder.css';

class Folder extends React.Component  {    

  
  render(){
    return ( 
      <li key={this.props.folderid}>         
        <NavLink to={`/Folder/${this.props.folderid}`}>
        {this.props.folderName}</NavLink>
      </li>
    );
  }
}

export default Folder;
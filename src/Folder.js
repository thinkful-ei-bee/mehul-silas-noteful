import React from 'react';
import HomePage from './HomePage'
import {Route,Link} from 'react-router-dom';

class Folder extends React.Component  {    

  
render(){
    
    console.log("here");

  return (
      
   <li>         
           <Link to={`/Folder/${this.props.folderid}`}>
           {this.props.folderName}</Link>
   </li>
   
  );
}

}

export default Folder;
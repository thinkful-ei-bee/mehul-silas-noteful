import React from 'react';
import HomePage from './HomePage'
import {Route,Link} from 'react-router-dom';
import STORE from './STORE'
import Folder from './Folder'

class FolderList extends React.Component  {

  

  render() {
    if(this.props.match !== undefined) {
      console.log(this.props.match.path)
    }
    let folders = STORE.folders.map(folder =>{
      return <Folder 
        folderid={folder.id} 
        folderName= {folder.name} />
    })
      
    return (
      <ul>
        {folders}
      </ul>
    );
  }
}

export default FolderList;
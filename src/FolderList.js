import React from 'react';
import HomePage from './HomePage'
import {Route,Link} from 'react-router-dom';
import STORE from './STORE'
import Folder from './Folder'

class FolderList extends React.Component  {


render() {
    let folders = STORE.folders.map(folder =>{
        return <Folder folderid={folder.id} folderName= {folder.name} />
    })
    
  return (
      <ul>
          {folders}
    </ul>
  );
  }
}

export default FolderList;
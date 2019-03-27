import React from 'react';
import Folder from './Folder'
import UserContext from './UserContext'

class FolderList extends React.Component  {

  static contextType = UserContext;  

  render() {

    const {state} = this.context;

    let folders = state.folders.map(folder =>{
      return <Folder 
        folderid={folder.id} 
        folderName= {folder.name} />
    })
      
    return (
      <ul className='folderList'>
        {folders}
      </ul>
    );
  }
}

export default FolderList;
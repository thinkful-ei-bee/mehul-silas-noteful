import React from 'react';
import Folder from './Folder'
import UserContext from './UserContext'

class FolderList extends React.Component  {

  static contextType = UserContext;  

  render() {

    const {folders} = this.context;

    let uniqueFolders = folders.map(folder =>{
      return <Folder 
        folderid={folder.id} 
        folderName= {folder.name} />
    })
      
    return (
      <ul className='folderList'>
        {uniqueFolders}
      </ul>
    );
  }
}

export default FolderList;
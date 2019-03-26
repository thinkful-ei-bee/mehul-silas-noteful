import React from 'react';
import {Route,Link} from 'react-router-dom';
import HomePage from './HomePage'
import FolderList from './FolderList'
import NoteList from './NoteList'

class App extends React.Component {

  render(){
  return (
    <main className='App'>

    <section>
     <Route path='/' component={HomePage} />
     <Route path='/' render = {()=> <FolderList />} />
     

    </section>

    <section>
     <Route path='/Folder/:id' component={NoteList}  />
    </section>

    </main>
  );
  }
}

export default App;
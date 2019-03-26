import React from 'react';
import {Route,Link} from 'react-router-dom'
import HomePage from './HomePage'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NotePage from './NotePage'
import STORE from './STORE'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      STORE:STORE,
    }
  }

  render(){
  return (
    <main className='App'>

    <section>
     <Route path='/' component={HomePage} />
     <Route exact path='/' render={() => <FolderList store ={this.state.STORE} />}/>
    </section>

    <section>
     <Route path='/Folder/:id' render={() => <FolderList store ={this.state.STORE} />} />
     <Route path='/Folder/:id' render={(props) => <NoteList match={props.match} store ={this.state.STORE} />}  />
    </section>

    <section>
      <Route path='/Note/:id' render={(props) => <NotePage match={props.match} store ={this.state.STORE} />} />
    </section>

    </main>
  );
  }
}

export default App;
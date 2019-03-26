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
      fromOrigin: true
    }
  }

   changeOrigin = (boolean) => {
    if(this.state.fromOrigin!==boolean){
      this.setState({
      fromOrigin:boolean
    });
  }
  }

  render(){
  return (
    <main className='App'>

    <section>
     <Route path='/' render={() => <HomePage changeOrigin={this.changeOrigin} store ={this.state.STORE} />} />
     <Route exact path='/' render={() => <FolderList changeOrigin={this.changeOrigin} store ={this.state.STORE} />}/>
     <Route exact path='/' render={() => <NoteList store ={this.state.STORE} />}  />
    </section>

    <section>
     <Route path='/Folder/:id' render={() => <FolderList changeOrigin={this.changeOrigin} store ={this.state.STORE} />} />
     <Route path='/Folder/:id' render={(props) => <NoteList match={props.match} store ={this.state.STORE} />}  />
    </section>

    <section>
      <Route path='/Note/:id' render={(props) => <NotePage fromOrigin={this.state.fromOrigin} match={props.match} curr= {this.props.match} store ={this.state.STORE} />} />
    </section>

    </main>
  );
  }
}

export default App;
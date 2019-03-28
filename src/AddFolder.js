import React from 'react';
import cuid from 'cuid'

export default class AddFolder extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      folderName: '',
      prevFolder: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = cuid()
    
    fetch(`http://localhost:9090/folders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        name: this.state.folderName
      })
    }).then(() => this.props.updateState())
  }

  handleName(event) {
    this.setState({folderName: event})
  }

  render() {
    return (
        <form onSubmit={e => this.handleSubmit(e)}>
            <label for='add-folder'>Add Folder</label>
            <input type='text' name='add-folder' onChange={e => this.handleName(e.target.value)}></input>
            <button type='submit'>Ok</button>
        </form>
    )
  }
}
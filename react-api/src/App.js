// src/App.js

import React, { Component } from 'react';
import Files from './components/files';

class App extends Component {
  state = {
    files: []
  }
  componentDidMount() {
    fetch('https://api.put.io/v2/files/list?sort_by=NAME_ASC&file_type=FOLDER&parent_id=-1', {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Bearer UFFX2DMM7B2OJJCTQKFZ',
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .then((data) => {
        // console.log(data.files)
        // var parentFolders = [];
        // data.files.forEach(element => {
        //   if (element.parent_id === 0) {
        //     parentFolders = [...parentFolders, element];
        //   }
        // });
        // console.log(parentFolders)
        // this.setState({ files: parentFolders })
        this.setState({ files: data.files })
      })
      .catch(console.log)
  }
  render() {
    return (
      <Files files={this.state.files} />
    )
  }
}

export default App;
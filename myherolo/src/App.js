import React, { Component } from 'react';
import './App.css';
import BookList from './Components/booklist';
import DeleteModal from './Components/modals/deletemodal';
import AddModal from './Components/modals/addmodal';

class App extends Component {

  render() {
    return (
      <div className="container">
      <h1>Books Application</h1>
      <BookList />
      <DeleteModal />      
      <AddModal />
      </div>
    );
  }
}


export default App;

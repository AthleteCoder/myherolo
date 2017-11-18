import React, { Component } from 'react';
import './App.css';
import BookList from './Components/booklist';
import DeleteModal from './Components/modals/deletemodal';
import AddModal from './Components/modals/addmodal';
import EditModal from './Components/modals/editmodal';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="container">
      <div className="neondiv">
      <div className="neon">Books</div>
      <div className="flux">Application</div>
      </div>
      {this.props.Errors ? <p>{this.props.Errors}</p> : null}
      <BookList />
      {this.props.deleteModal ? <DeleteModal /> : null}
      {this.props.addModal ? <AddModal /> : null}
      {this.props.editModal ? <EditModal Book={this.props.editBook}/> : null}
      </div>
    );
  }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchBooks } from '../store/actions';
import { Button, Pager} from 'react-bootstrap';
import { showEditModal, showDeleteModal, showAddModal } from '../store/booksActions';
import Book from './book';

class BookList extends Component {
    constructor(props){
        super(props);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
    }

  componentWillMount(){
    this.props.dispatch(fetchBooks());
  }
  
  onClickEdit(Book){
      this.props.dispatch(showEditModal(Book));
  }

  onClickDelete(index){
    this.props.dispatch(showDeleteModal(index));
  }

  onClickAdd(){
      this.props.dispatch(showAddModal());
  }

  render() {

  const books = this.props.BooksCollection ? 
  this.props.BooksCollection.map(
      (book,index) => 
      <Book key={index} Book={book} Index={index} 
      onClickEdit={() => this.onClickEdit(book)} 
      onDeleteClick={()=> this.onClickDelete(index)} />
    ): null;

    return (
    <div className="book-list">
    <div className="card-container">
      {books}
  </div>
    <Pager>
      <Button onClick={this.onClickAdd} bsStyle="primary">+ ADD</Button>
    </Pager>
  </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps )(BookList);

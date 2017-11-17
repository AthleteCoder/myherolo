import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchBooks } from '../store/actions';
import { Button, Panel,ButtonToolbar, Pager,Glyphicon} from 'react-bootstrap';
import { showEditModal, showDeleteModal, showAddModal } from '../store/booksActions';
import EditModal from '../Components/modals/editmodal';
import Book from './book';

class BookList extends Component {
    constructor(props){
        super(props);
        this.renderBook = this.renderBook.bind(this);
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

  renderBook(props){
    return(
    <tr>
        <td>{props.Index+1}</td>
        <td>{props.Book.Title}</td>
        <td>{props.Book.Author}</td>
        <td>{props.Book.Date}</td>
        <td><ButtonToolbar>
            <Button onClick={() => this.onClickDelete(props.Index)} bsStyle="danger"><Glyphicon glyph="trash" /> Delete</Button>
            <Button onClick={() => this.onClickEdit(props.Book)} bsStyle="info"><Glyphicon glyph="pencil" /> Edit</Button>
            </ButtonToolbar>
        </td>
      </tr>
    );
  }

  render() {

  const books = this.props.Fetched ? 
  this.props.BooksCollection.map(
      (book,index) => 
      <Book key={index} Book={book} Index={index} 
      onClickEdit={() => this.onClickEdit(book)} 
      onDeleteClick={()=> this.onClickDelete(index)} />
    ): null;

    return (
    <div>
    <Panel header="Books" bsStyle="primary">
    <div className="card-container">
      {books}
  </div>
    <Pager>
      <Button onClick={this.onClickAdd} bsStyle="primary">+ ADD</Button>
    </Pager>
  </Panel>
  {this.props.editModal ? <EditModal Book={this.props.editBook}/> : null}
</div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps )(BookList);

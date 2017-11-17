import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import { closeDeleteModal, deleteBook } from '../../store/booksActions';

class DeleteModal extends Component {

    close(){
        this.props.dispatch(closeDeleteModal());
    }

    onDeleteBook(){
        this.props.dispatch(deleteBook());
        this.close();
    }

  render() {
    return (
        <div>
        <Modal show={this.props.deleteModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Are you sure you want to delete this Book?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.onDeleteBook.bind(this)}>Delete</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
  }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps)(DeleteModal);

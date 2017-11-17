import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  render() {
    const { Book, onDeleteClick, onClickEdit } = this.props;
    return (
      <div className="card">
        <div className="card-image"></div>
        <div className="card-info">
          <div className="card-title">{Book.Title}</div>
          <div className="card-detail">
            <h1>
              Book Author: {Book.Author}
            </h1>
            <p>Released Date: {Book.Date}</p>
          </div>
        </div>
        <div className="card-social">
          <ul>
            <li onClick={onDeleteClick}><i className="fa fa-trash-o" aria-hidden="true"></i>Delete</li>
            <li onClick={onClickEdit}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</li>
          </ul>
        </div>
      </div>
    );
  }
}
Book.PropTypes = {
  Book: PropTypes.object.isRequired,
  Index: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired
};
export default Book;

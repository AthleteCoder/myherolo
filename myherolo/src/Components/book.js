import React, { Component } from 'react';
import { Button,ButtonToolbar,Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Book extends Component {

  render() {
      const { Index, Book, onDeleteClick, onClickEdit} = this.props;
    return (
            <tr>
                <td>{Index+1}</td>
                <td>{Book.Title}</td>
                <td>{Book.Author}</td>
                <td>{Book.Date}</td>
                <td><ButtonToolbar>
                    <Button onClick={onDeleteClick} bsStyle="danger"><Glyphicon glyph="trash" /> Delete</Button>
                    <Button onClick={onClickEdit} bsStyle="info"><Glyphicon glyph="pencil" /> Edit</Button>
                    </ButtonToolbar>
                </td>
            </tr>
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

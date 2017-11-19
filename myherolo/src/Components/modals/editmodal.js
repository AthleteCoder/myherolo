import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, HelpBlock, FormControl,Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import { closeEditModal, editBook } from '../../store/booksActions';
import { isValidDateStr, TitleTransform } from '../../helpers/fncshelpers';

class EditModal extends Component {

  constructor(props){
    super(props);
    this.state={Title:'',Author:'',startDate:'',Errors:null};
    this.FieldGroup = this.FieldGroup.bind(this);
  }
  componentWillMount(){
    const {Title,Author,Date} = this.props.editBook;
    this.setState({Title: Title,Author: Author, startDate: Date});
  }
    close(){
        this.props.dispatch(closeEditModal());
    }

    FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
  }

  handleEditClick = () =>{
    const Errors = [];
    const { Author, Title, startDate} = this.state;
    if(Author == null || Author.length <= 0){
        Errors.push('Author name Must be Filled!');
    }
    if(Title == null || Title.length <= 0){
        Errors.push('Title name must be filled!');
    }
    if(startDate == null || startDate.length <= 0){
      Errors.push('Proper Format date: dd/mm/yyy');
    }
    else if(!isValidDateStr(startDate)){
      Errors.push('Proper Format date: dd/mm/yyyy');
  }
    if(Errors.length <= 0){
      const newTitle = TitleTransform(Title);
        const Book = {
            Title: newTitle,
            Author: Author,
            Date: startDate
        }
        this.props.dispatch(editBook(Book));
        this.close();
    }
    else{
        this.setState({Errors:Errors});
    }
  }

  handleDateChange = (event) => {
    this.setState({startDate:event.target.value});
  }

  handleTitleChange = (event) =>{
      this.setState({Title:event.target.value});
  }

  handleAuthorChange = (event) =>{
      this.setState({Author:event.target.value});
  }

  render() {
    return (
        <div>
        <Modal show={this.props.editModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.Errors ? 
              this.state.Errors.map(
                  (error,i)=><Alert key={i} bsStyle="danger"><strong>Error: </strong>{error}</Alert>) : null}
        <this.FieldGroup
          id="formControlsText"
          type="text"
          value={this.state.Title}  
          label="Title"
          placeholder="Enter Title"
          onChange={this.handleTitleChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          value={this.state.Author}  
          label="Author"
          placeholder="Enter Author"
          onChange={this.handleAuthorChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          value={this.state.startDate}  
          label="Date Format: dd/mm/yyyy"
          placeholder="Enter Date"
          onChange={this.handleDateChange}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleEditClick} bsStyle="primary">Edit Book</Button>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
  }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps)(EditModal);

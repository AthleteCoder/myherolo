import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, HelpBlock, FormControl,Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import { closeAddModal, addNewBook } from '../../store/booksActions';
import { isValidDateStr, TitleTransform, CheckForDupTitles } from '../../helpers/fncshelpers';


class AddModal extends Component {
    constructor(props){
        super(props);
        this.state={selectedDate:null,Author:null,Title:null,Errors:null};
        this.FieldGroup = this.FieldGroup.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        
    }

    close(){
        this.props.dispatch(closeAddModal());
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

    handleDateChange(event){
        this.setState({selectedDate:event.target.value});
    }

    handleTitleChange = (event) =>{
        this.setState({Title:event.target.value});
    }

    handleAuthorChange = (event) =>{
        this.setState({Author:event.target.value});
    }

    handleNewBook = () => {
        const Errors = [];
        const { Author, Title, selectedDate} = this.state;
        if(Author == null || Author.length <= 0){
            Errors.push('Author name Must be Filled!');
        }
        if(Title == null || Title.length <= 0){
            Errors.push('Title name must be filled!');
        }
        if(selectedDate == null || selectedDate.length <= 0){
            Errors.push('Proper Format date: dd/mm/yyy');
        }
        else if(!isValidDateStr(selectedDate)){
            Errors.push('Proper Format date: dd/mm/yyy');
        }
        if(CheckForDupTitles(Title,this.props.BooksCollection))
            Errors.push('Title already exists!');
        if(Errors.length <= 0){
            const newTitle = TitleTransform(Title);
            const Book = {
                Title: newTitle,
                Author: Author,
                Date: selectedDate
            }
            this.props.dispatch(addNewBook(Book));
            this.close();
        }
        else{
            this.setState({Errors:Errors});
            setTimeout(()=> this.setState({Errors:null}),10000);
        }
    }

  render() {
    return (
        <div>
        <Modal show={this.props.addModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.Errors ? 
                this.state.Errors.map(
                    (error,i)=><Alert key={i} bsStyle="danger"><strong>Error: </strong>{error}</Alert>) : null}
          <this.FieldGroup
            id="formControlsText"
            type="text"
            label="Title"
            placeholder="Enter Title"
            onChange={this.handleTitleChange}
            required
            />
            <this.FieldGroup
            id="formControlsEmail"
            type="text"
            label="Author"
            placeholder="Enter Author"
            onChange={this.handleAuthorChange}
            />
            <this.FieldGroup
            id="formControlsEmail"
            type="text"
            label="Date Format: dd/mm/yyyy"
            placeholder="Enter Date"
            onChange={this.handleDateChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleNewBook} bsStyle="primary">Add Book</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
  }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps)(AddModal);

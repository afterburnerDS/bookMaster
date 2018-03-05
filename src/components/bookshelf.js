import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BookPage from './bookpage';
import Book from './book';
import {addBook} from '../actions';
import AddBook from './add-book';
import ReactModal from 'react-modal';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import ContactForm from './contactform'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import ModalExample from './modalexample';

export class BookShelf extends React.Component  {

    // constructor () {
    //     super();
    //     this.state = {
    //       showModal: false
    //     };
        
    //     this.handleOpenModal = this.handleOpenModal.bind(this);
    //     this.handleCloseModal = this.handleCloseModal.bind(this);
    //   }
      
    //   handleOpenModal () {
    //     this.setState({ showModal: true });
    //   }
      
    //   handleCloseModal () {
    //     this.setState({ showModal: false });
    //   }

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    


    addBook(title){
        this.props.dispatch(addBook(title));
    }

    render() {
        
        const books = this.props.books.map((book, index) => (
         
                <Book 
                    index={index}
                    {...book}
                   
                /> 
            
        ));

        
        return (
            <main className="container">

                <div className="newBook">
                    <div className="newBook__new">
                   
                    {/* <AddBook
                            onAdd={(title) => this.addBook(title)}
                        /> */}

                        {/* <button onClick={this.handleOpenModal}>New Book</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >

         <ContactForm />
        
       
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal> */}

     <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
                      
                    
                    </div>
                </div>
                <div className="bookShelf">
                    <p className="bookShelf__title">BookShelf</p>
                    <div className="bookShelf__container">
                        {books}
                     </div>
                </div>
            </main>
    );
    }
}

BookShelf.defaultProps = {
    title: 'BookShelf'
};

const mapStateToProps = (state, props) => {

    console.log(state.books);
   return{
            books: state.books
            
        }
   ;
    
};

export default connect(mapStateToProps)(BookShelf);



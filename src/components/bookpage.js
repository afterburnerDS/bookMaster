import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {addAnnotation} from '../actions';
import AddAnnotation from './add-annotation';
import Annotation from './annotation';

export class  BookPage extends React.Component {

    addAnnotation(text){
        this.props.dispatch(addAnnotation(text,this.props.match.params.bookIndex));
    }
    
    render() {

        console.log(annotations);

        const annotations = this.props.annotations.map((annotation, index) => (
         
            <Annotation 
                index={index}
                bookIndex = {this.props.match.params.bookIndex}
                {...annotation}
               
            /> 
        
    ));
        return (

    <main className="container__bookPage">
     <div className="backBtn">
     <Link to="/bookshelf">Back </Link></div>
     <div className="bookPage">
         <div className="bookPage__technical">
             <div className="basicDetails">
                     <div className="coverBook"></div>
                     <div className="technicalDetails">
                         <p className="titleBook">{this.props.title}</p>
                         <p className="authorBook">Lorem, ipsum dolor.</p>
                         <p className="dateBook">Year:
                             <span className="dateBook__span">2014</span>
                         </p>
                         <p className="pagesBook">Pages:
                             <span className="pagesBook__span">340</span>
                         </p>           
                     </div>  
             </div>  
             
             <p className="resumeBook">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatibus?</p>
         

         </div>
         <div className="bookPate__annotations">
            <div className="newBook__new">
                   
                    <AddAnnotation
                           onAdd={text => this.addAnnotation(text)}
                        />
                    
                    </div>
             {annotations}
         </div>
     </div>
 </main>
  
         
     );
    }

}

const mapStateToProps = (state, props) => {
    console.log(props.match.params.bookIndex);

    console.log(state.books);
    
    const book = state.books.find((book) => {
        return book.title.replace(/ /g, "-") === props.match.params.bookIndex
    })

    

    console.log(book);

    // const book = Object.assign(
    //     {},
    //     {
    //         annotations: []
    //     },
    //     state.books[props.match.params.bookIndex]
    // );
    return {
        title: book.title,
        annotations: book.annotations
    };
    
};

export default connect(mapStateToProps)(BookPage);
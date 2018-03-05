import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export  class  AnnotaionPage extends React.Component {

    // slugify(text) {
    //     return text
    //         .toString()
    //         .toLowerCase()
    //         .replace(/[\s\W-]+/g, '-');
    // }
    
    render() {

        console.log("text "+ this.props.text);
        return (
            <main className="container">
                <div className="backBtn"> <Link to={`/bookpage/${this.props.bookIndex}`}>back </Link></div>
                    <div className="annotation">
                        {this.props.text}
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

    const annotation = book.annotations.find((annot) => {
        return annot.text.replace(/ /g, "-") === props.match.params.annotationId
    })

    return {
        text: annotation.text,
        bookIndex: props.match.params.bookIndex
        
    };
    
};

export default connect(mapStateToProps)(AnnotaionPage);
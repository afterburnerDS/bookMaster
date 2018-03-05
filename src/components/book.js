import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class  Book extends React.Component {

    slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .replace(/[\s\W-]+/g, '-');
    }

    render() {

        const slugifyTtitle = this.slugify(this.props.title)
 
        return (
            <div className="book">
                    <Link to={`/bookpage/${slugifyTtitle}`}>{this.props.title} </Link>
            </div>
         
     );

    };
}

// Book.defaultProps = {
//     title: ''
// };


const mapStateToProps = (state, props) => {

    console.log(state.books);
   return{
            books: state.books
            
        }
   ;
    
};
export default connect()(Book);
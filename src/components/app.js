import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Bookshelf from './bookshelf';
import BookPage from './bookpage';
import AnnotationPage from './annotationpage';

import './app.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">
             <header className="header">
                <h1 className="titleApp"><Link to="/">Book Master</Link></h1>
            </header>
                {/* <header>
                    <h1><Link to="/">Trelloish</Link></h1>
                </header> */}
               
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bookshelf" component={Bookshelf} />
                    <Route exact path="/bookpage/:bookIndex" component={BookPage} />
                    <Route exact path="/annotation/:bookIndex/:annotationId" component={AnnotationPage} />
                
            </div>
        </Router>
    );
}

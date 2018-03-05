import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        return (
            <main className="container">
            <div className="content_mainPage">

            <div className="content_mainPage--secondary">
                <p className="welcomeTitle">Welcome to Book Master ! </p>

                <p className="instructions">Here you will be able to create your own recipes, and choose ingredients from our database of more than 300.000
                    foods from all around the world ! You can also edit, delete, and also filter your recipes by ingredient
                    used or tag inserted.</p>

                <p className="happyCooking">Happy Cooking !</p>


                <div className="loginCredentials">
                    <p>Test Login Credentials</p>
                    <p>username: test@test.com</p>
                    <p>password: testthinkful2018</p>
                </div>


                <div className="button"><Link to="/bookshelf"> Login</Link></div>
 

            </div>
            </div>

            </main>
            
            // <div className="home-page">
            //     <h2>Welcome to Trelloish</h2>
            //     <form onSubmit={e => this.goToBoard(e)}>
            //         <input type="text" value={this.slugify(this.state.text)}
            //             onChange={e => this.setText(e.target.value)} />
            //         <button>Go to board</button>
            //     </form>
            // </div>
        );
    }
}

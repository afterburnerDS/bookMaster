import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export  class  AddAnnotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(this.textInput.value);
        }
        this.textInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }
    render() {
        if (!this.state.editing) {
            return (
                <div className="add-button"
                onClick={() => this.setEditing(true)}>
                    <a>Add an annotation...</a>
                </div>
            );
        }

        return (
            <form className="card add-form" onSubmit={this.onSubmit}>
                <input type="text" ref={input => this.textInput = input} />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}

AddAnnotation.defaultProps = {
    title: 'BookShelf'
};



export default connect()(AddAnnotation);

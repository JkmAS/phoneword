import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//actions
import {changeQuery} from '../../actions/query.js';
import {showWords} from '../../actions/words.js';

/**
 * Component with input field and logic
 */
export class InputBox extends Component {

    /**
     * @constructor
     */
    constructor() {
        super();
        this.deleteText = this.deleteText.bind(this);
    }

    /**
     * Delete query via delete button and remove suggested words
     */
    deleteText(){
        let query = this.props.query;
        if(query !== "") {
            this.props.changeQuery("");
            this.props.showWords([]);
        }
    }

    render() {
        return (
            <div>
                <input type="number" value={this.props.query} disabled="disabled"/>
                <button onClick={this.deleteText}>Del</button>
            </div>
        );
    }
}

/**
 * Props query
 * Props changeQuery
 * Props showWords
 */
InputBox.propTypes = {
    query: PropTypes.string,
    changeQuery: PropTypes.func,
    showWords: PropTypes.func
};

/**
 * Map state to props
 */
const mapStateToProps = state => ({
    query: state.query
});
/**
 * Map dispatch function to props
 */
const mapDispatchToProps = dispatch => ({
    changeQuery: (query) => {
        dispatch(changeQuery(query));
    },
    showWords: (words) => {
        dispatch(showWords(words));
    }
});
/**
 * Connect function connects React components to a Redux Store
 */
export default connect(mapStateToProps, mapDispatchToProps)(InputBox);

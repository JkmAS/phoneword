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
        this.writeNumber = this.writeNumber.bind(this);
        this.showWords = this.showWords.bind(this);
    }

    /**
     * Function, which changes query and call Meteor server method
     *
     * @param {Object} event Event.
     */
    writeNumber(event){
        this.props.changeQuery(event.target.value);
        //@todo onchange not evoke if change via buttons
        Meteor.call('phoneword.prediction', event.target.value, this.showWords);
    }

    /**
     * Callback function, which sets suggested words.
     *
     * @param {Meteor.Error} error Meteor error.
     * @param {Array} result Response from server.
     */
    showWords(error, result){
        //@todo
        if(result) {
            console.log(result);
            this.props.showWords(result);
        }

    }

    render() {
        return (
            //@todo check if positive number from 0-9 not -0 -> -9
            <input type="number" placeholder="Type the numbers" value={this.props.query} onChange={this.writeNumber}/>
        );
    }
}

/**
 * Props query
 * Props showWords
 * Props changeQuery
 */
InputBox.propTypes = {
    changeQuery: PropTypes.func,
    showWords: PropTypes.func,
    query: PropTypes.string
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

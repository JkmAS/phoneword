import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


//actions
import {changeQuery} from '../../actions/query.js';
import {showWords} from '../../actions/words.js';

/**
 * Component for displaying button with symbol and text presentation
 */
export class KeyboardButton extends Component {

    /**
     * @constructor
     */
    constructor(props) {
        super(props);
        this.writeNumber = this.writeNumber.bind(this);
        this.showWords = this.showWords.bind(this);
    }

    /**
     * Function, which changes query and call Meteor server method
     */
    writeNumber(){
        Meteor.call('phoneword.prediction', this.props.query + this.props.no, this.showWords);
        this.props.changeQuery(this.props.query + this.props.no);
    }

    /**
     * Callback function, which sets suggested words.
     *
     * @param {Meteor.Error} error Meteor error.
     * @param {Array} result Response from server.
     */
    showWords(error, result){
        if(result) {
            this.props.showWords(result);
        } else {
            console.error(error);
            alert("Error: " + error.message);
        }
    }

    render() {
        return (
            <button onClick={this.writeNumber}>{this.props.no} {this.props.text}</button>
        );
    }
}

/**
 * Props changeQuery
 * Props query
 * Props no
 * Props text
 */
KeyboardButton.propTypes = {
    changeQuery: PropTypes.func,
    showWords: PropTypes.func,
    query: PropTypes.string,
    no: PropTypes.number,
    text: PropTypes.array
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
export default connect(mapStateToProps, mapDispatchToProps)(KeyboardButton);

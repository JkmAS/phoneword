import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

//actions
import {changeQuery} from '../../actions/query.js';
import {showWords} from '../../actions/words.js';

/**
 * @todo
 */
export class InputBox extends Component {

    constructor() {
        super();
        this.writeNumber = this.writeNumber.bind(this);
        this.showWords = this.showWords.bind(this);
    }

    writeNumber(event){
        this.props.changeQuery(event.target.value);
        //call server method @todo
        //Meteor.call('phoneword.prediction', this.props.query, this.showWords);
    }

    //@todo
    showWords(error, result){
        this.props.showWords(result);
    }

    render() {
        return (
            <input type="number" placeholder="Type the numbers" value={this.props.query} onChange={this.writeNumber}/>
        );
    }
}

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

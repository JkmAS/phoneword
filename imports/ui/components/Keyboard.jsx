import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//components
import KeyboardButton from './KeyboardButton.jsx';

//actions
import {changeQuery} from '../../actions/query.js';
import {showWords} from '../../actions/words.js';

//keyboard
import { KEYBOARD_BUTTONS } from '../../logic/keyboardButtons.js';

/**
 * Component for displaying keyboard, call server methods
 */
export class Keyboard extends Component {

    /**
     * @constructor
     */
    constructor(props) {
        super(props);

        this.callTransformation = this.callTransformation.bind(this);
        this.showWords = this.showWords.bind(this);
        this.typing = this.typing.bind(this);
        this.handleFilter = this.handleFilter.bind(this);

        //timer reducing calling of server methods
        this.timer = "";

        this.state = {
            isWordFilterChecked: true,//if true, only existing words are returned
            typing: "" //status informing the user
        };
    }

    /**
     * Function, that is called from a descendant to set new query and call server method with delay
     */
    typing(number){
        clearTimeout(this.timer);
        this.setState({typing: "typing"});
        let query = this.props.query + number;

        this.props.changeQuery(query);
        this.timer = setTimeout(() => {this.callTransformation(query)},3000);
    }

    /**
     * Function, which calls Meteor server method
     */
    callTransformation(query){
        this.setState({typing: "calling text help"});
        Meteor.call('phoneword.prediction', query, this.state.isWordFilterChecked, this.showWords);
    }

    /**
     * Callback function, which sets suggested words.
     *
     * @param {Meteor.Error} error Meteor error.
     * @param {Array} result Response from server.
     */
    showWords(error, result){
        this.setState({typing: ""});
        if(result) {
            this.props.showWords(result);
        } else {
            console.error(error);
            alert("Error: " + error.message);
        }
    }

    /**
     * Function, that sets the filter to display just existing words
     */
    handleFilter(){
        this.setState({isWordFilterChecked: !this.state.isWordFilterChecked});
    }

    render() {
        return (
            <div>
                <div>{this.state.typing}</div>
                {KEYBOARD_BUTTONS.map(button =>
                    <KeyboardButton
                        key={button.no}
                        {...button}
                        typing={this.typing}
                    />
                )}
                <input type="checkbox" checked={this.state.isWordFilterChecked} onChange={this.handleFilter} />
            </div>
        );
    }
}

/**
 * Props changeQuery
 * Props query
 * Props showWords
 */
Keyboard.propTypes = {
    showWords: PropTypes.func,
    changeQuery: PropTypes.func,
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
export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);

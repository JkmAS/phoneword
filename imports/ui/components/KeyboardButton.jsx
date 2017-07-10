import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';


/**
 * Component for displaying button with symbol and text presentation
 */
export default class KeyboardButton extends Component {

    /**
     * @constructor
     */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Handle click to button and call function of parent component
     */
    handleChange(){
        this.props.typing(this.props.no);
    }

    render() {
        return (
            <button onClick={this.handleChange}>{this.props.no} {this.props.text}</button>
        );
    }
}

/**
 * Props no
 * Props text
 * Props typing
 */
KeyboardButton.propTypes = {
    typing: PropTypes.func,
    no: PropTypes.number,
    text: PropTypes.array
};


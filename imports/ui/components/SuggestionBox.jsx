import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

/**
 * @todo
 */
export class SuggestionBox extends Component {

    render() {
        return (
            <div>{this.props.words}</div>
        );
    }
}

/**
 * Map state to props
 */
const mapStateToProps = state => ({
    words: state.words
});
/**
 * Connect function connects React components to a Redux Store
 */
export default connect(mapStateToProps, null)(SuggestionBox);

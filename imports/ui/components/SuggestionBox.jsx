import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Component for displaying suggested words
 */
export class SuggestionBox extends Component {

    render() {
        console.log(this.props.words);
        return (
            <div>{this.props.words}</div>
        );
    }
}

/**
 * Props words
 */
SuggestionBox.propTypes = {
    words: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

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

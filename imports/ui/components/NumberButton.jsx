import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


//actions
import {changeQuery} from '../../actions/query.js';

/**
 * Component for displaying button with number and text presentation
 */
export class NumberButton extends Component {

    /**
     * @constructor
     */
    constructor(props) {
        super(props);

        this.writeNumber = this.writeNumber.bind(this);
    }

    /**
     * Function, which changes query
     */
    writeNumber(){
        this.props.changeQuery(this.props.query+this.props.no);
    }

    render() {
        return (
            <button onClick={this.writeNumber}>{this.props.no} ({this.props.text})</button>
        );
    }
}

/**
 * Props changeQuery
 * Props query
 * Props no
 * Props text
 */
NumberButton.propTypes = {
    changeQuery: PropTypes.func,
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
    }
});
/**
 * Connect function connects React components to a Redux Store
 */
export default connect(mapStateToProps, mapDispatchToProps)(NumberButton);

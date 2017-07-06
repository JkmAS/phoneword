import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';


//actions
import {changeQuery} from '../../actions/query.js';

/**
 * @todo
 */
export class NumberButton extends Component {

    constructor(props) {
        super(props);

        this.writeNumber = this.writeNumber.bind(this);
    }

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

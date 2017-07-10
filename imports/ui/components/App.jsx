import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

//components
import SuggestionBox from './SuggestionBox.jsx';
import Keyboard from './Keyboard.jsx';
import InputBox from './InputBox.jsx';

/**
 * Root component with App
 */
export default class App extends Component {

    render() {
        return (
            <div>
                <SuggestionBox/>
                <InputBox/>
                <Keyboard/>
            </div>
        );
    }
}

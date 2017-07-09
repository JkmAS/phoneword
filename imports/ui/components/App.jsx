import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

//components
import SuggestionBox from './SuggestionBox.jsx';
import KeyboardButton from './KeyboardButton.jsx';
import InputBox from './InputBox.jsx';

//keyboard
import { KEYBOARD_BUTTONS } from '../../logic/keyboardButtons.js';

/**
 * Root component with App
 */
export default class App extends Component {

    render() {
        return (
            <div>
                <SuggestionBox/>
                <InputBox/>
                {KEYBOARD_BUTTONS.map(button =>
                        <KeyboardButton
                            key={button.no}
                            {...button}
                        />
                )}
            </div>
        );
    }
}

import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

//components
import SuggestionBox from './SuggestionBox.jsx';
import NumberButton from './NumberButton.jsx';
import InputBox from './InputBox.jsx';

//keyboard
import { KEYBOARD_BUTTONS } from '../../logic/keyboardButtons.js';
/**
 * @todo
 */
export default class App extends Component {

    render() {
        return (
            <div>
                <SuggestionBox/>
                <InputBox/>
                {KEYBOARD_BUTTONS.map(button =>
                        <NumberButton
                            key={button.no}
                            {...button}
                        />
                )}
            </div>
        );
    }
}

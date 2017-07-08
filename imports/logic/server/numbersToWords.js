import { KEYBOARD_BUTTONS } from '../../logic/keyboardButtons.js';

/**
 * Transformation of the entered numbers into a text combination
 */

//Text output
let output = "";
//Indicates which character is selected
let pointer = 0;
//Response to client via array
let response = [];

/**
 * Resets the variables to their default values.
 */
export function reset(){
    response = [];
    output = "";
}

/**
 * Recursive function, which transforms the numeric input into the corresponding text output
 *
 * @param {string} query Query input from client.
 * @param {string} previousChars Previously obtained text result.
 *
 * @return {Array}  Array of text combinations
 *
 * @throws {Meteor.Error} Error
 */
export function numbersToWords(query, previousChars = ""){
    let number = query.charAt(pointer);
    let keyboardChars = [];

    //get chars according to number
    switch (number) {
        case "0":
            keyboardChars = KEYBOARD_BUTTONS[0].text;
            break;
        case "1":
            keyboardChars = KEYBOARD_BUTTONS[1].text;
            break;
        case "2":
            keyboardChars = KEYBOARD_BUTTONS[2].text;
            break;
        case "3":
            keyboardChars = KEYBOARD_BUTTONS[3].text;
            break;
        case "4":
            keyboardChars = KEYBOARD_BUTTONS[4].text;
            break;
        case "5":
            keyboardChars = KEYBOARD_BUTTONS[5].text;
            break;
        case "6":
            keyboardChars = KEYBOARD_BUTTONS[6].text;
            break;
        case "7":
            keyboardChars = KEYBOARD_BUTTONS[7].text;
            break;
        case "8":
            keyboardChars = KEYBOARD_BUTTONS[8].text;
            break;
        case "9":
            keyboardChars = KEYBOARD_BUTTONS[9].text;
            break;
        default:
            throw new Meteor.Error('bad-value', "Must be only number from 0 to 9");
    }

    //for each char in chars array
    keyboardChars.forEach((keyboardChar) => {
        //take previous chars and add new char
        output = previousChars+keyboardChar;

        //if the query length is different from the current pointer
        if(query.length !== (pointer+1)){
            pointer++;
            //recursively call function with previousChars
            numbersToWords(query,output);
            pointer--;
        //if the current pointer is in the end of query length
        } else {
            //add output to the response array
            response.push(output);
            //set output to the previous chars
            output = previousChars;
        }
    });

    //return the response (returns from recursive call are ignored)
    return response;
}
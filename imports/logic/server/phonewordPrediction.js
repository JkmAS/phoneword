import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { numbersToWords, reset}  from '../../logic/server/numbersToWords.js';

/**
 * Client call the methods via Meteor.call
 */
Meteor.methods({
    /**
     * Function, which calls the transformation.
     *
     * @param {string} query Query from client.
     *
     * @return {Array}  Array of text combinations
     *
     * @throws {Meteor.Error} Error
     */
    'phoneword.prediction'(query) {
        if (Meteor.isServer) {
            //check input
            check(query, String);

            reset();
            //@todo check the input - only 0-9 numbers
            //@todo catch errors from function
            return numbersToWords(query);
        }
    }
});
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
     * @param {boolean} onlyExistingWords If true, return only existing words.
     *
     * @return {Array}  Array of text combinations
     *
     * @throws {Meteor.Error} Error
     */
    'phoneword.prediction'(query, onlyExistingWords = false) {
        if (Meteor.isServer) {
            //check if query is only string
            check(query, String);
            //check onlyExistingWords is only boolean
            check(onlyExistingWords, Boolean);

            //reset variables from numbersToWords
            reset();

            try {
                return numbersToWords(query, "", onlyExistingWords);
            } catch (error){
                throw error;
            }
        }
    }
});
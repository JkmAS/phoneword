import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert, expect } from 'meteor/practicalmeteor:chai';
import { Match } from 'meteor/check';

//import of tested method
import './phonewordPrediction.js';

/**
 * Tests of Meteor method
 */
if (Meteor.isServer) {
    describe('phoneword', () => {
        describe('methods', () => {
            describe('wordPrediction', () => {
                let validQuery = "23";
                let invalidQuery = "0123";
                let invalidQueryWithLetters = "12a";
                let invalidQueryDataType = true;

                it('can transform numbers to words', () => {
                    const method = Meteor.server.method_handlers['phoneword.prediction'];
                    let response = method.apply("", [validQuery, false]);
                    expect(response).to.eql([ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]);
                });

                it('can not transform numbers to words', () => {
                    const method = Meteor.server.method_handlers['phoneword.prediction'];
                    assert.throws(() => method.apply("", [invalidQuery, false]), Meteor.Error, "bad-value");
                });

                it('can not transform letters with numbers to words', () => {
                    const method = Meteor.server.method_handlers['phoneword.prediction'];
                    assert.throws(() => method.apply("", [invalidQueryWithLetters, false]), Meteor.Error, "bad-value");
                });

                it('can not transform other data types to words', () => {
                    const method = Meteor.server.method_handlers['phoneword.prediction'];
                    assert.throws(() => method.apply("", [invalidQueryDataType, false]), Match.Error);
                });
            });
            describe('wordPredictionExistingWords', () => {

                let validQueryExistingWords = "43";

                it('can transform numbers to existing words', () => {
                    const method = Meteor.server.method_handlers['phoneword.prediction'];
                    let response = method.apply("", [validQueryExistingWords, true]);
                    expect(response).to.eql([ 'he', 'id', 'if']);
                });
            });
        });
    });
}
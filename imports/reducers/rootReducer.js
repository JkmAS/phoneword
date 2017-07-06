/**
 * Root reducer. It utilizes reducer composition to make our code modular.
 */
import { combineReducers } from 'redux';

import query from './../reducers/query.js';
import words from './../reducers/words.js';

const rootReducer = combineReducers({
   query,
   words
});

export default rootReducer;
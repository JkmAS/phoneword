/**
 * Reducer. It takes the current state and an action and returns the next state.
 *
 * @param {string} state State.
 * @param {Object} action Action.
 *
 * @return {string}
 */
export default function words(state = "", action = {}) {
    switch (action.type) {
        case 'SHOW_WORDS':
            return action.words;
        default:
            return state;
    }
};
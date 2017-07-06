/**
 * Reducer. It takes the current state and an action and returns the next state.
 *
 * @param {string} state State.
 * @param {Object} action Action.
 *
 * @return {string}
 */
export default function query(state = "", action = {}) {
    switch (action.type) {
        case 'CHANGE_QUERY':
            return action.query;
        default:
            return state;
    }
};
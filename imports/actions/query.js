/**
 * Action for change query.
 *
 * @param {string} query Query.
 *
 * @return {Object}
 */
export function changeQuery(query) {
    return {
        type: 'CHANGE_QUERY',
        query: query
    };
}
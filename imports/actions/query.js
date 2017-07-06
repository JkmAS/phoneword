/**
 * @todo
 *
 * @param {string}  query
 *
 * @return {Object}
 */
export function changeQuery(query) {
    return {
        type: 'CHANGE_QUERY',
        query: query
    };
}
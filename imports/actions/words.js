/**
 * @todo
 *
 * @param {string} words
 *
 * @return {Object}
 */
export function showWords(words) {
    return {
        type: 'SHOW_WORDS',
        words: words
    };
}
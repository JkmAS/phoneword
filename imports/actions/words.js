/**
 * Action to display suggested words.
 *
 * @param {Array} words Array of suggested words.
 *
 * @return {Object}
 */
export function showWords(words) {
    return {
        type: 'SHOW_WORDS',
        words: words
    };
}
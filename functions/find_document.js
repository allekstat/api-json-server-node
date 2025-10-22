import {ENDPOINT} from '../constants.js';
/**
 * fetches documents from the server and filters them by a query object (strict equality comparison).
 * @param {Object} [query = {}] - object with key/value pairs used to filter documents. each pair is compared with ===.
 * @returns {Promise<Object>} an object with { status, statusText, result } where result is an array of matched documents.
 * @throws {TypeError} throws if fetching or json parsing fails.
 */
async function find_document(query = {})
{
    const response = await fetch(ENDPOINT, {method: 'GET'});
    const documents = await response.json();
    const matches = documents.filter(function (item)
    {
        for (const field in query)
            if (query[field] !== item[field])
                return false;
        return true;
    });
    return {status: response.status, statusText: response.statusText, result: matches};
};
export default find_document;

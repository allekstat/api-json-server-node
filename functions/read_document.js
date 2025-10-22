import {ENDPOINT} from '../constants.js';
/**
 * read (get) a specific document by its id.
 * @param {string} [id = ''] - identifier of the document to read.
 * @returns {Promise<Object>} an object with { status, statusText, result } where result is the returned document (json body).
 * @throws {TypeError} throws if the request or json parsing fails.
 */
async function read_document(id = '')
{
    const response = await fetch(`${ENDPOINT}/${id}`, {method: 'GET'});
    const documents = await response.json();
    return {status: response.status, statusText: response.statusText, result: documents};
};
export default read_document;

import {ENDPOINT} from '../constants.js';
/**
 * create a new document by sending a post to the configured endpoint.
 * @param {Object} [document = {}] - the document object to create; it will be serialized to json.
 * @returns {Promise<Object>} an object with the http response status and status text: { status, statusText }.
 * @throws {TypeError} throws if fetch fails (network rejection).
 */
async function create_document(document = {})
{
    const response = await fetch(ENDPOINT, {method: 'POST', body: JSON.stringify(document)});
    return {status: response.status, statusText: response.statusText};
};
export default create_document;

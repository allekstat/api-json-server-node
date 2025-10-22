import {ENDPOINT} from '../constants.js';
/**
 * partially update a document using patch.
 * @param {string} [id = ''] - identifier of the document to update.
 * @param {Object} [document = {}] - object containing fields to update (serialized to json).
 * @returns {Promise<Object>} an object with { status, statusText } with the request result.
 * @throws {TypeError} throws if fetch fails.
 */
async function update_document(id = '', document = {})
{
    const response = await fetch(`${ENDPOINT}/${id}`, {method: 'PATCH', body: JSON.stringify(document)});
    return {status: response.status, statusText: response.statusText};
}
export default update_document;

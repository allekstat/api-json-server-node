import {ENDPOINT} from '../constants.js';
/**
 * completely replace an existing document using put.
 * @param {string} [id = ''] - identifier of the document to replace.
 * @param {Object} [document = {}] - new document object that will replace the existing one (serialized to json).
 * @returns {Promise<Object>} an object with { status, statusText } with the request result.
 * @throws {TypeError} throws if fetch fails.
 */
async function replace_document(id = '', document = {})
{
    const response = await fetch(`${ENDPOINT}/${id}`, {method: 'PUT', body: JSON.stringify(document)});
    return {status: response.status, statusText: response.statusText};
}
export default replace_document;

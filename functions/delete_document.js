import {ENDPOINT} from '../constants.js';
/**
 * remove a document on the server using delete on the corresponding endpoint.
 * @param {string} [id = ''] - identifier of the document to remove.
 * @returns {Promise<Object>} an object with { status, statusText } returned by the request.
 * @throws {TypeError} throws if fetch fails (network error).
 */
async function delete_document(id = '')
{
    const response = await fetch(`${ENDPOINT}/${id}`, {method: 'DELETE'});
    return {status: response.status, statusText: response.statusText};
};
export default delete_document;

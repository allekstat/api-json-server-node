import { ENDPOINT } from '../constants.js';
async function read_document(id = '')
{
    const response = await fetch(`${ ENDPOINT }/${ id }`, { method: 'GET' });
    const documents = await response.json();
    return { status: response.status, statusText: response.statusText, result: documents };
};
export default read_document;

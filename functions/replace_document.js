import { ENDPOINT } from '../constants.js';
async function replace_document(id = '', document = {})
{
    const response = await fetch(`${ ENDPOINT }/${ id }`, { method: 'PUT', body: JSON.stringify(document) });
    return { status: response.status, statusText: response.statusText };
}
export default replace_document;

import { ENDPOINT } from '../constants.js';
async function delete_document(id = '')
{
    const response = await fetch(`${ ENDPOINT }/${ id }`, { method: 'DELETE' });
    return { status: response.status, statusText: response.statusText };
};
export default delete_document;

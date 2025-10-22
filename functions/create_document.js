import { ENDPOINT } from '../constants.js';
async function create_document(document = {})
{
    const response = await fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(document) });
    return { status: response.status, statusText: response.statusText };
};
export default create_document;

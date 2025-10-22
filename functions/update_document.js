import {ENDPOINT} from '../constants.js';
async function update_document(id = '', document = {})
{
    const response = await fetch(`${ENDPOINT}/${id}`, {method: 'PATCH', body: JSON.stringify(document)});
    return {status: response.status, statusText: response.statusText};
}
export default update_document;

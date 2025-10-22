import { ENDPOINT } from '../constants.js';
function update_document(id, document = {})
{
    const response = fetch(`${ENDPOINT}/${id}`, {method: 'PATCH', body: JSON.stringify(document)});
    response.then(r => console.log(`status: ${r.status} ${r.statusText}`));
}
export default update_document;

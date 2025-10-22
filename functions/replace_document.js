import { ENDPOINT } from '../constants.js';
function replace_document(id, document = {})
{
    const response = fetch(`${ENDPOINT}/${id}`, {method: 'PUT', body: JSON.stringify(document)});
    response.then(r => console.log(`status: ${r.status} ${r.statusText}`));
}
export default replace_document;

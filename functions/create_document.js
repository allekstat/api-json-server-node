import { ENDPOINT } from '../constants.js';
function create_document(document = {})
{
    const response = fetch(ENDPOINT, {method: 'POST', body: JSON.stringify(document)});
    response.then(r => console.log(`status: ${r.status} ${r.statusText}`));
};
export default create_document;

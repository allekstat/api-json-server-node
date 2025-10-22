import { ENDPOINT } from '../constants.js';
function delete_document(id)
{
    const response = fetch(`${ENDPOINT}/${id}`, {method: 'DELETE'});
    response.then(r => console.log(`status: ${r.status} ${r.statusText}`));
};
export default delete_document;

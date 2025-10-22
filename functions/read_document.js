import { ENDPOINT } from '../constants.js';
function read_document(id = '')
{
    const response = fetch(`${ENDPOINT}/?id=${id}`, {method: 'GET'});
    const list = response.then(r => r.json());
    list.then(l => console.log(l));
};
export default read_document;

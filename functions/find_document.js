import { ENDPOINT } from '../constants.js';
async function find_document(query)
{
    const response = await fetch(ENDPOINT, { method: 'GET' });
    const documents = await response.json();
    const matches = documents.filter(function (item)
    {
        for (const field in query)
            if (query[field] !== item[field])
                return false;
        return true;
    });
    return { status: response.status, statusText: response.statusText, result: matches };
};
export default find_document;

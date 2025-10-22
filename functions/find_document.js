import { ENDPOINT } from '../constants.js';
function find_document(query)
{
    const response = fetch(ENDPOINT, { method: 'GET' });
    const list = response.then(body => body.json());
    const matches = list.then(function (documents)
    {
        const cases = documents.filter(function (item)
        {
            for (const field in query)
                if (query[field] !== item[field])
                    return false;
            return true;
        });
        return cases;
    });
    return matches
};
export default find_document;

import * as api from './bundle.js';
// api.create_document({name:'prato'}).then(console.log);
// function random_string(length = 1)
// {
//     let name = '';
//     for (let i = 0; i < length; i ++)
//     {
//         name += String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
//     }
//     return name;
// }
function random_hexadecimal(length = 1)
{
    let hexadecimal = '';
    for (let i = 0; i < length; i ++)
    {
        hexadecimal += Math.floor(Math.random() * 16).toString(16);
    }
    return hexadecimal;
}
function timestamp_to_decimal()
{
    return new Date().toISOString().replace(/\D/g, '');
}
function number_to_bigint(number)
{
    return BigInt(number);
}
function decimal_to_hexadecimal(decimal)
{
    return decimal.toString(16);
}
function hexadecimal_to_timestamp(hexadecimal)
{
    return hexadecimal.toString().replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{3})/g,'$3/$2/$1 $4:$5:$6 .$7')
}
api.read_document().then(({result: documents}) => documents.forEach(document => api.delete_document(document.id)))
// for (let i = 0; i < 100; i ++)
//     api.create_document({name: decimal_to_hexadecimal(number_to_bigint(timestamp_to_decimal()))});

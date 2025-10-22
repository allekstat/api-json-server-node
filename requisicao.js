// const cabechalhos = new Headers();
// cabechalhos.append('accept', 'image/png');
// const rota = 'http://127.0.0.1:12345/produtos';
// const dados =
// {
//     nome: "asus rog phone 7",
//     valor: 9000.00,
//     id: 4
// };
// const resposta = fetch(rota, {method: 'post', headers: cabechalhos, body: JSON.stringify(dados)});
// const json = resposta.then(r => r.json());
// json.then(j => console.log(j));
// console.log(await resposta.json());
// resposta.then(r => console.log(r));

// function create_document(document = {})
// {
//     const response = fetch('http://127.0.0.1:12345/produtos', {method: 'post', body: JSON.stringify(document)});
//     response.then(r => console.log(`status: ${r.status} ${r.statusText}`));
// }

// function read_document(id = '')
// {
//     const response = fetch(`http://127.0.0.1:12345/produtos/?id=${id}`, {method: 'get'});
//     const list = response.then(r => r.json());
//     list.then(l => console.log(l));
// }

// function delete_document(id)
// {
//     const response = fetch(`http://127.0.0.1:12345/produtos/${id}`, {method: 'delete'});
//     response.then(r => console.log(`status: ${r.status} ${r.statusText}`));
//     // response.catch(e => console.error(e));
// }

// function update_document(id, document = {})
// {
//     const response = fetch(`http://127.0.0.1:12345/produtos/${id}`, {method: 'put', body: JSON.stringify(document)});
//     response.then(r => console.log(`status: ${r.status} ${r.statusText}`));
// }

// create_document
// ({
//     id: 1,
//     nome: "redemcao 13pt",
//     valor: 10
// });
// read_document(1);
// delete_document(1);
// update_document(1, {marca})
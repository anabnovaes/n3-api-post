const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};


const add = (request, response) => {
  //trazendo os dados do request em JSON
  let dadosContato = request.body;
  // gravando o nome do contato do JSON em uma variável
  let nomeContato = request.body.nome;
  // incluindo data de nascimento em uma variavel
  let dataNascimento = request.body.dataNascimento;


  // incluindo  
  //dadosContato.id = Math.random().toString(36).substr(-8);
  dadosContato.id = model.agenda.contatos.length +1; 
  


  //verificando duplicidades no nome do contato
  const verificarDivergencias = model.agenda.contatos.filter(contato => contato.nome === nomeContato);
  

  // verificando se o nome é uma string ou está vazio
  const verificarNome = verificarString(nomeContato)
  if(!verificarNome){
    verificarDivergencias.push[verificarNome]
  }

  // adicionando os dados apenas se a array de comparação estiver vazia 
  if (verificarDivergencias.length === 0 ) {
    model.agenda.contatos.push(dadosContato)
  }else {
    response.send("Usuário já existe!")
  }



  response.status(200).send("Cadastrado com sucesso!")
}




module.exports = {
  getAll,
  add
}

const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};


const add = (request, response) => {
  //trazendo os dados do request em JSON
  const dadosContato = request.body;
  // gravando o nome do contato do JSON em uma variável
  const nomeContato = request.body.nome;

  // incluindo  o ID do contato
  //dadosContato.id = Math.random().toString(36).substr(-8);
  dadosContato.id = model.agenda.contatos.length +1; 
  // incluindo variavel para mensagens de erro 
  let resposta = ''

  //verificando duplicidades no nome do contato
  const verificarDivergencias = model.agenda.contatos.filter(contato => contato.nome === nomeContato);
  

  // verificando se o nome foi inserido
  const verificarNome = dadosContato.hasOwnProperty('nome')

  // verificando se a data de nascimento foi inserida
  const verificarDataNascimento = dadosContato.hasOwnProperty('dataNascimento')

  // verificando se o telefone foi inserido
  const verificarTelefone = dadosContato.hasOwnProperty('celular')


  // condição para adicionar valor na variavel de comparação caso o nome não esteja no request
  if(!verificarNome || !verificarDataNascimento || !verificarTelefone ){
    verificarDivergencias.push(verificarNome);
    console.log(verificarDivergencias)
  }



  
  // adicionando os dados apenas se a array de comparação estiver vazia 
  if (verificarDivergencias.length === 0 ) {
    model.agenda.contatos.push(dadosContato)
    resposta = "Cadastrado com sucesso!";
  }else {
     resposta = "Usuário já existe ou dados inválidos !"
  }



  response.status(200).send(resposta)
}




module.exports = {
  getAll,
  add
}

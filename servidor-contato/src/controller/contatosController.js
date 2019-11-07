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
  // incluindo um ID no JSON do request
  dadosContato.id = Math.random().toString(36).substr(-8);
  //criando um array vazio para utilizar na verificação dos dados
  const arrVerificacoes = []
  // verificando se o nome já é existente nos nomes gravados
  model.agenda.contatos.forEach(contato => {
    const resultado = contato.nome.indexOf(nomeContato);
    if (resultado != -1) {
      arrVerificacoes.push(resultado)
      response.status(200).send("Nome já cadastrado!")
    }
  });
  // verificando se o nome é válido
  if(typeof(dadosContato.nome) != "String" || dadosContato === ""){
    arrVerificacoes.push(-1);
  }
  

  // adicionando os dados apenas se a array de comparação estiver vazia 
  if (arrVerificacoes.length === 0) {
    model.agenda.contatos.push(dadosContato)
  }



  response.status(200).send("Cadastrado com sucesso!")
}




module.exports = {
  getAll,
  add
}

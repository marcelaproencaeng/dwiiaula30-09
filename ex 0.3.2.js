const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    dias: 60,
  },
];
function listarConcluidasEAbaixoDe30() {
  return tarefas
    .filter((tarefa) => tarefa.concluida)
    .filter((tarefa) => tarefa.dias < 30);
}

console.log(listarConcluidasEAbaixoDe30());

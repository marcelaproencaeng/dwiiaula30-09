const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costana',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
];
const medicosNaoBinarios = medicos.forEach((medico) => {
  if (medico.genero === 'nao-binario') {
    const apresentacao = `Dr (e) ${medico.nome} ${medico.sobrenome}`;

    console.log(apresentacao);
  } else if (medico.genero === 'masculino') {
    const apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;

    console.log(apresentacao);
  } else {
    const apresentacao = `Dr(a) ${medico.nome} ${medico.sobrenome}`;

    console.log(apresentacao);
  }
});

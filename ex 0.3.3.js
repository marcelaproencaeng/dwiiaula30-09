// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

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
    const apresentacao = ' Dr (e) Noah Lutus ';
    console.log(apresentacao);
  } else if (medico.genero === 'masculino') {
    const apresentacao = ' Dr. Adimaldo Pinto ';
    console.log(apresentacao);
  } else {
    const apresentacao = ' Dr (a) Leticia Costana';
    console.log(apresentacao);
  }
});

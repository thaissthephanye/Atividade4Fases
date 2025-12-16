const pessoas = [
  { nome: "Ana", cidade: "SP" },
  { nome: "Lucas", cidade: "RJ" },
  { nome: "Bruna", cidade: "SP" },
  { nome: "Caio", cidade: "MG" },
];

let agrupado = pessoas.reduce((acc, pessoa) => {
  let cidade = pessoa.cidade;

  acc[cidade] = [];

  acc[cidade].push(pessoa);
  return acc;
});

console.log(agrupado);

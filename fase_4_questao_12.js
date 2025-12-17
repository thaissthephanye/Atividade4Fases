const obj = {
    id: 1,
    dados: {
        nome: "Ana",
        preferencias: {
            tema: "escuro",
            fonte: "Sans"
        }
    }
};
const { dados: { preferencias: { tema }, ...resto } } = obj;
console.log(tema, resto);
// Output: escuro { nome: 'Ana' }
// explicação: A desestruturação extrai a propriedade 'tema' do objeto 'preferencias',
// e o operador rest coleta o restante das propriedades de 'dados' em 'resto', que contém { nome: 'Ana' }.

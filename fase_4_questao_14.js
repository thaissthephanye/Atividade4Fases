const arr = [1, 2, 3];
const func = ([x, ...resto], y = [...resto, x]) => {
    return y;
};
console.log(func(arr));
// Saída: [2, 3, 1]
// Explicação: A função func utiliza desestruturação para extrair o primeiro elemento do array arr (que é 1) e agrupa o restante dos elementos em um novo array chamado resto (que é [2, 3]). O parâmetro y tem um valor padrão que cria um novo array contendo os elementos de resto seguidos por x. Portanto, y se torna [2, 3, 1], que é o valor retornado pela função.
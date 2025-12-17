const matriz = [[1, 2], [3, 4], [5, 6]];
const [, [, y], ...resto] = matriz;
console.log(y, resto);
// Output: 4 [ [ 5, 6 ] ]
// explicação: A desestruturação ignora o primeiro subarray [1, 2],
// extrai o segundo subarray [3, 4] e pega o segundo elemento (4) dele,
// e o operador rest coleta o restante dos subarrays em 'resto', que é [[5, 6]].
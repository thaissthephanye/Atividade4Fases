const config1 = { modo: "dark", opcoes: { layout: "grid", zoom: 100 } };
const config2 = { ...config1, opcoes: { ...config1.opcoes } };
config2.opcoes.zoom = 200;
console.log(config1.opcoes.zoom, config2.opcoes.zoom);
// Saída: 100 200
// Explicação: Neste exemplo, config2 é criado como uma cópia rasa (shallow copy) de config1. No entanto, a propriedade opcoes é um objeto aninhado. Quando alteramos o valor de zoom em config2.opcoes, isso também afeta config1.opcoes, porque ambos os objetos compartilham a mesma referência para o objeto opcoes. Portanto, a saída mostra que o zoom em config1 permanece 100, enquanto o zoom em config2 é alterado para 200.
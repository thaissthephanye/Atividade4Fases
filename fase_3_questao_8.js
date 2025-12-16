const valores = [10, 20, 30, 40];
function soma(a, b, ...resto) {
  return a + b + resto.length;
}
console.log(soma(...valores));

// Expected output: 10 + 20 + 2 = 32

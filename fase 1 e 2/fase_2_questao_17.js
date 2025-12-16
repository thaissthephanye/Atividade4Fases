const arr = [10, 15, 22, 34, 45, 60];
const processado = arr
  .filter((n) => n % 3 === 0)
  .map((n) => ({ original: n, metade: n / 2 }))
  .reduce((acc, obj) => acc + obj.metade, 0);
console.log(processado);

// código reescrito
let processadoo = 0;
for (let i = 0; i < arr.length; i++) {
  let n = arr[i];
  if (n % 3 === 0) {
    let metade = n / 2;
    processadoo = processadoo + metade;
  }
}
console.log(processadoo);

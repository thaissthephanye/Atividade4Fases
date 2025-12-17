const arr = [1, 2, 3];
const func = ([x, ...resto], y = [...resto, x]) => {
    return y;
};
console.log(func(arr));

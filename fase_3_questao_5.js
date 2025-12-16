function teste({ x = 10, y = 20 } = {}) {
  console.log(x + y);
}
teste({ x: 5 });

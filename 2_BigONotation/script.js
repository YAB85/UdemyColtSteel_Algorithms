function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(8));

function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpToSecond(6));

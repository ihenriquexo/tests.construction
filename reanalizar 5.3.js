//fiz usando IA obs.: refazer amanhã
const k2 = [];
const k9 = [];
const fiu = [];

let matue = "s";
while (matue === "s") {
  let ktwo = prompt("Digite um número para k2:");
  let knove = prompt("Digite um número para k9:");

  k2.push(Number(ktwo));
  k9.push(Number(knove));

  matue = prompt("Digite 's' para continuar ou qualquer outra tecla para parar.");
}

for (let l = k2.length - 1; l >= 0; l--) {
  if (k9.indexOf(k2[l]) !== -1 || k2[l] % 2 !== 0) {
    fiu.push(k2.splice(l, 1)[0]);
  }
}

for (let l = k9.length - 1; l >= 0; l--) {
  if (k2.indexOf(k9[l]) !== -1 || k9[l] % 2 !== 0) {
    fiu.push(k9.splice(l, 1)[0]);
  }
}

console.log("k2:", k2);
console.log("k9:", k9);
console.log("fiu:", fiu);

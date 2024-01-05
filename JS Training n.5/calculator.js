function soma(num1, num2) {
  return num1 + num2;
}
function subtracao(num1, num2) {
  return num1 - num2;
}
function multiplicacao(num1, num2) {
  return num1 * num2;
}
function divisao(num1, num2) {
  return num1 / num2;
}
let parametro1 = parseFloat(
  prompt("Lança o primeiro número, para ser calculado")
);
let parametro2 = parseFloat(
  prompt("Lança o segundo número, para ser calculado")
);
let operacao = prompt(
  "Escolhe sua operação, 1 para +, 2  para -, 3 para *, 4 para / "
);
if (operacao === "1") {
  alert(soma(parametro1, parametro2));
} else if (operacao === "2") {
  alert(subtracao(parametro1, parametro2));
} else if (operacao === "3") {
  alert(multiplicacao(parametro1, parametro2));
} else if (operacao === "4") {
  alert(divisao(parametro1, parametro2));
} else {
  alert("fez errado ai, vê teus passo");
}

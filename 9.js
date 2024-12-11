const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarVoto(idade) {
  if (idade < 16) {
    return "Você não pode votar.";
  } else if ((idade >= 16 && idade <= 17) || idade >= 70) {
    return "Seu voto é facultativo.";
  } else if (idade >= 18 && idade < 70) {
    return "Seu voto é obrigatório.";
  }
}

rl.question("Digite sua idade: ", (input) => {
  const idade = parseInt(input);
  const resultado = verificarVoto(idade);
  console.log(resultado);
  rl.close();
});

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const meses = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro"
};

const diasPorMes = {
  1: 31,
  2: 28, // Considerando anos não bissextos
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

const trimestres = {
  1: "1º trimestre",
  2: "1º trimestre",
  3: "1º trimestre",
  4: "2º trimestre",
  5: "2º trimestre",
  6: "2º trimestre",
  7: "3º trimestre",
  8: "3º trimestre",
  9: "3º trimestre",
  10: "4º trimestre",
  11: "4º trimestre",
  12: "4º trimestre"
};

function verificarData(dia, mes) {
  if (mes < 1 || mes > 12) {
    return "Mês inválido";
  }
  if (dia < 1 || dia > diasPorMes[mes]) {
    return "Dia inválido";
  }
  const trimestre = trimestres[mes];
  return `Data válida: ${dia} de ${meses[mes]}, ${trimestre}`;
}

rl.question("Digite o dia: ", (diaInput) => {
  const dia = parseInt(diaInput);
  rl.question("Digite o mês: ", (mesInput) => {
    const mes = parseInt(mesInput);
    const resultado = verificarData(dia, mes);
    console.log(resultado);
    rl.close();
  });
});

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

const signos = [
  { nome: "Aquário", inicio: { dia: 21, mes: 1 }, fim: { dia: 19, mes: 2 } },
  { nome: "Peixes", inicio: { dia: 20, mes: 2 }, fim: { dia: 20, mes: 3 } },
  { nome: "Áries", inicio: { dia: 21, mes: 3 }, fim: { dia: 20, mes: 4 } },
  { nome: "Touro", inicio: { dia: 21, mes: 4 }, fim: { dia: 20, mes: 5 } },
  { nome: "Gêmeos", inicio: { dia: 21, mes: 5 }, fim: { dia: 20, mes: 6 } },
  { nome: "Câncer", inicio: { dia: 21, mes: 6 }, fim: { dia: 21, mes: 7 } },
  { nome: "Leão", inicio: { dia: 22, mes: 7 }, fim: { dia: 22, mes: 8 } },
  { nome: "Virgem", inicio: { dia: 23, mes: 8 }, fim: { dia: 22, mes: 9 } },
  { nome: "Libra", inicio: { dia: 23, mes: 9 }, fim: { dia: 22, mes: 10 } },
  {
    nome: "Escorpião",
    inicio: { dia: 23, mes: 10 },
    fim: { dia: 21, mes: 11 }
  },
  {
    nome: "Sagitário",
    inicio: { dia: 22, mes: 11 },
    fim: { dia: 21, mes: 12 }
  },
  {
    nome: "Capricórnio",
    inicio: { dia: 22, mes: 12 },
    fim: { dia: 20, mes: 1 }
  }
];

function verificarData(dia, mes) {
  if (mes < 1 || mes > 12) {
    return "Mês inválido";
  }
  if (dia < 1 || dia > diasPorMes[mes]) {
    return "Dia inválido";
  }

  const trimestre = trimestres[mes];
  const nomeMes = meses[mes];
  const signo = signos.find(
    (s) =>
      (mes === s.inicio.mes && dia >= s.inicio.dia) ||
      (mes === s.fim.mes && dia <= s.fim.dia) ||
      (mes > s.inicio.mes && mes < s.fim.mes)
  ).nome;

  return `Data válida: ${dia} de ${nomeMes}, ${trimestre}, Signo: ${signo}`;
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

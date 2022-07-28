const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const quantidade = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      quantidade.child += 1;
    } if (element.age >= 18 && element.age < 50) {
      quantidade.adult += 1;
    } if (element.age >= 50) {
      quantidade.senior += 1;
    }
  });
  return quantidade;
}
const precos = data.prices;

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (entrants.length === undefined) return 0;
  const pessoas = countEntrants(entrants);
  let valor = 0;
  const { child, adult, senior } = pessoas;
  const { adult: precoAdult, senior: precoSenior, child: precoChild } = precos;
  valor = (child * precoChild) + (adult * precoAdult) + (senior * precoSenior);
  return valor;
}

module.exports = { calculateEntry, countEntrants };

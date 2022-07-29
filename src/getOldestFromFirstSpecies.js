const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalID = data.employees.find((employee) => employee.id === id).responsibleFor[0];

  const resultado = data.species.find((especie) => especie.id === animalID).residents
    .reduce((maisVelho, atual) => {
      if (atual.age > maisVelho.age) {
        return atual;
      }
      return maisVelho;
    });
  return [resultado.name, resultado.sex, resultado.age];
}
module.exports = getOldestFromFirstSpecies;

const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, especie) => {
      acc[especie.name] = especie.residents.length;
      return acc;
    }, {});
  }
  if (animal.specie && animal.sex) {
    return data.species.find((especie) => especie.name === animal.specie).residents
      .filter((residente) => residente.sex === animal.sex).length;
  }
  if (animal.specie) {
    return data.species.find((especie) => especie.name === animal.specie).residents.length;
  }
}

module.exports = countAnimals;

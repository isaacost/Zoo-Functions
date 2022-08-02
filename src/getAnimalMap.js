const data = require('../data/zoo_data');

function mapa() {
  const local = { NE: [], NW: [], SE: [], SW: [] };
  return data.species.reduce((acc, especie) => {
    acc[especie.location].push(especie.name);
    return acc;
  }, local);
}

function residentes(animal, sorted, sex) {
  const { residents } = data.species.find((especie) => especie.name === animal);

  if (sorted && sex) {
    return residents.filter((residente) => residente.sex === sex)
      .map((residente) => residente.name).sort();
  }
  if (sex) {
    return residents.filter((residente) => residente.sex === sex)
      .map((residente) => residente.name);
  }
  if (sorted) {
    return residents.map((residente) => residente.name).sort();
  }
  return residents.map((residente) => residente.name);
}

function getAnimalMap(options) {
  const funcMapa = mapa();

  if (!options) return funcMapa;

  const { includeNames, sorted, sex } = options;

  if (includeNames) {
    Object.keys(funcMapa).forEach((loc) => {
      funcMapa[loc] = funcMapa[loc].map((animal) => {
        const animalNovo = {};
        animalNovo[animal] = residentes(animal, sorted, sex);
        return animalNovo;
      });
    });
    return funcMapa;
  }
  if (sex) return funcMapa;
  if (sorted) return funcMapa;
}

module.exports = getAnimalMap;

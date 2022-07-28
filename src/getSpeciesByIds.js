const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');


function getSpeciesByIds(...ids) {
  const resultado = [];

  ids.forEach((id, index) => {
    if (species.some((element) => element.id === id)) {
      resultado[index] = species.find((element) => element.id === id);
    }
  })
  return resultado;
}


module.exports = getSpeciesByIds;

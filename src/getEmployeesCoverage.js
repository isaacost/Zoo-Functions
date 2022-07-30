const data = require('../data/zoo_data');

const { employees, species } = data;

function infoEmpregados(employee) {
  const employeeID = employee.id;
  const nomeCompleto = `${employee.firstName} ${employee.lastName}`;
  const nomeAnimal = employee.responsibleFor.map((animalID) => species
    .find((especie) => especie.id === animalID).name);
  const localizacaoAnimal = nomeAnimal.map((nome) => species
    .find((especie) => especie.name === nome).location);

  return {
    id: employeeID,
    fullName: nomeCompleto,
    species: nomeAnimal,
    locations: localizacaoAnimal,
  };
}

function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return employees.map((employee) => infoEmpregados(employee));
  }
  const { name, id } = parametro;
  let resultado;
  if (name) {
    resultado = (element) => element.firstName === name || element.lastName === name;
  } if (id) {
    resultado = (element) => element.id === id;
  }
  const employee = employees.find(resultado);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return infoEmpregados(employee);
}

module.exports = getEmployeesCoverage;

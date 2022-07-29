const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers
    .find((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } return employees.filter((gerente) => gerente.managers.includes(managerId))
    .map((empregados) => `${empregados.firstName} ${empregados.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

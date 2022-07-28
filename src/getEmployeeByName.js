const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  } return data.employees.find((funcionario) =>
    funcionario.firstName === employeeName || funcionario.lastName === employeeName);
}

module.exports = getEmployeeByName;

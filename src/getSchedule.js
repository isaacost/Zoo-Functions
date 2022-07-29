const data = require('../data/zoo_data');

const animal = data.species.map((especie) => especie.name);
const dias = Object.keys(data.hours);

function diaAnimal(param) {
  return data.species.find((especie) => especie.name === param).availability;
}

function diasFuncionamento(dia) {
  const cronograma = {};
  if (dia === 'Monday') {
    cronograma[dia] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    cronograma[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: data.species.filter((ani) => ani.availability.includes(dia))
        .map((ani) => ani.name),
    };
  }
  return cronograma;
}

function semanaFuncionamento() {
  const cronograma = {};
  dias.forEach((dia) => {
    if (dia === 'Monday') {
      cronograma[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      cronograma[dia] = {
        officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
        exhibition: data.species.filter((ani) => ani.availability.includes(dia))
          .map((ani) => ani.name),
      };
    }
  });
  return cronograma;
}

function getSchedule(scheduleTarget) {
  if (animal.includes(scheduleTarget)) {
    return diaAnimal(scheduleTarget);
  }
  if (dias.includes(scheduleTarget)) {
    return diasFuncionamento(scheduleTarget);
  }
  return semanaFuncionamento();
}

module.exports = getSchedule;

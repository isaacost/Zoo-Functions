const getOpeningHours = require('../src/getOpeningHours');

const hours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};
const closed = 'The zoo is closed';
const open = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('Verifica se caso não tenha parâmetros a função retorna o objeto hora:', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Verifica se caso o dia seja um valor não localizado retorne erro:', () => {
    expect(() => getOpeningHours('Mondau', '09:00-AM')).toThrow();
  });
  it('Verifica se caso a hora seja um valor não localizado retorne erro:', () => {
    expect(() => getOpeningHours('Friday', 'i9:00-AM')).toThrow();
  });
  it('Verifica se caso a abreviatura seja um valor não localizado retorne erro:', () => {
    expect(() => getOpeningHours('Friday', '09:00-Ap')).toThrow();
  });
  it('Verifica se as horas não estão entre 0 e 12 e retorna erro:', () => {
    expect(() => getOpeningHours('Friday', '14:00-AM')).toThrow();
  });
  it('Verifica se os minutos não estão entre 0 e 59 e retorna erro:', () => {
    expect(() => getOpeningHours('Friday', '12:70-AM')).toThrow();
  });
  it('Verifica se retorna fechado as segundas-feiras:', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(closed);
  });
  it('Verifica se retorna aberto as terças-feiras as 09:00-AM :', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(open);
  });
  it('Verifica se retorna fechado as sextas-feiras as 09:00-PM :', () => {
    expect(getOpeningHours('Friday', '09:00-PM')).toEqual(closed);
  });
  it('Verifica se retorna aberto as terças-feiras as 12:00-PM :', () => {
    expect(getOpeningHours('Friday', '12:00-PM')).toEqual(open);
  });
});

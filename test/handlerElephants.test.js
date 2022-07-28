const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se caso não haja parâmetro retorna undefined:', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se o tipo do parâmetro é válido:', () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica a quantidade de elefantes:', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se há um elefante com o nome Jefferson:', () => {
    expect(handlerElephants('names')).toContainEqual('Jefferson');
  });
  it('Verifica se a média da idade dos elefantes é próxima a 10.5:', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se o retorno de uma string desconhecida retorna null:', () => {
    expect(handlerElephants('elefante')).toEqual(null);
  });
  it('Verifica a popularidade dos elefantes:', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});

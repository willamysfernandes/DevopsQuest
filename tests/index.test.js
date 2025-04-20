const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('deve retornar Olá, mundo!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Olá, mundo!');
  });
});

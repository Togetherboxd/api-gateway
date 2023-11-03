const request = require('supertest');
const { app, server } = require('../app');

describe('API Gateway', () => {
  afterEach((done) => {
    server.close(done);
  });

  test('should respond with "Hello from API" for root endpoint', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ "msg": "Hello from API" });
  });
});

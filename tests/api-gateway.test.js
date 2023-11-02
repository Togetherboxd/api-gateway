const request = require('supertest');
const { app, server } = require('../app');

describe('API Gateway', () => {
  afterEach((done) => {
    server.close(done);
  });

  test('should proxy the authentication requests', async () => {
    const response = await request(app).post('/authentication/register');

    expect(response.statusCode).toBe(200);
    // Add your expectations for the response body and headers as needed
  });

  test('should proxy the friends requests', async () => {
    const response = await request(app).get('/friends/users');

    expect(response.statusCode).toBe(200);
    // Add your expectations for the response body and headers as needed
  });

  test('should proxy the notifications requests', async () => {
    const response = await request(app).post('/notifications/response');

    expect(response.statusCode).toBe(200);
    // Add your expectations for the response body and headers as needed
  });
  

  test('should respond with "Hello from API" for root endpoint', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ "msg": "Hello from API" });
  });
});

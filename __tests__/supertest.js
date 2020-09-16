const request = require('supertest');
const server = 'http://localhost:3000';

describe('/ Route integration', () => {
  describe('GET', () => {
    // Currently throws 404 since no slash route definition
    it('responds with 200 status and text/html content type', () => {
      return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
    });
  });
});

describe('/api Route integration', () => {
  describe('USER', () => {
    it('GET responds with 200 status and json content type', () => {
      return request(server)
        .get('/api/user')
        .expect('Content-Type', /json/)
        .expect(200);
    });
    it('POST responds with 200 status and json content type', () => {
      return request(server)
        .post('/api/user')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
  describe('SKILL', () => {
    it('PUT responds with 200 status and json content type', () => {
      return request(server)
        .put('/api/skill')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
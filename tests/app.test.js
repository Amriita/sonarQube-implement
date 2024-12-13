const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
    it('should add a new user', async () => {
        const response = await request(app)
            .post('/api/user')
            .send({ name: 'John Doe', age: 30 });

        expect(response.status).toBe(201);
        expect(response.text).toBe('User added');
    });

    it('should fetch all users', async () => {
        const response = await request(app).get('/api/user');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

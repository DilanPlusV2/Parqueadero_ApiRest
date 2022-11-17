const app = require('../app');
const request = require('supertest');


describe ('GET /reservas', ()=>{
    test('Se espera una respuesta de 200', async ()=>{
       const response = await request(app).get('/reservas').send();
       expect(response.statusCode).toBe(200);
       console.log(response);
    });
});
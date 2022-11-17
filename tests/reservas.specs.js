import app from "../app";
import request from "supertest";

describe ('GET /reservas', ()=>{
    test('Se espera una respuesta de 200', async ()=>{
       const response = await request(app).get('/reservas').send();
       console.log(response);
    });
});
import request from "supertest";
import app from "../app";

describe('GET /purchase_history',()=>{
    test('If it is getting all the users',async ()=>{
        const response = await request(app).get('/purchase_history');
        console.log(response);
        expect(response.statusCode).toBe(200);
    })
})

describe('GET /purchase_history/id_user/:id_user', ()=>{
    test('if it is getting only 1 user', async ()=>{
        const response = await request(app).get('/purchase_history/id_user/1')
        console.log(response)
        expect(response.statusCode).toBe(200)
    })
})

describe('POST /purchase_history',()=>{
    test('If it is inserting a user/purchase',async ()=>{
        const response = await request(app).post('/purchase_history')
            .send({
                "id_user": 7,
                "item": "Mangá - Berserk Vol 30",
                "price": "R$39,00",
                "buy_date": "25-02-2013"
            });
        console.log(response.body);
        expect(response.body.message).toBeTruthy();
    })

    test('If the price with the correcty currency',async ()=>{
        const response = await request(app).post('/purchase_history')
            .send({
                "id_user": 7,
                "item": "Guia do Mochileiro das Galaxias",
                "price": "50,00",
                "buy_date": "05-02-2013"
            });
        console.log(response.body);
        expect(response.body.erro).toBeTruthy();
    } )
})

describe('DELETE /purchase_history/id_hist/:id_hist', ()=>{
    test('If it is deleting a unique purchase history', async ()=>{
        const response = await request(app).delete('/purchase_history/id_hist/2')
        console.log(response)
        expect(response.statusCode).toBe(200)
    })
})

describe('DELETE /purchase_history/id_user/:id_user', ()=>{
    test('If it is deleting a unique user', async ()=>{
        const response = await request(app).delete('/purchase_history/id_user/7')
        console.log(response)
        expect(response.statusCode).toBe(200)
    })
})

describe('PUT /purchase_history/id_hist/:id_hist', ()=>{
    test('If it is updating a unique purchase history given a ID_USER', async ()=>{
        const response = await request(app).put('/purchase_history/id_hist/3')
            .send({
                "id_user": 1,
                "item": "Desventuras em Série",
                "price": "R$15,00",
                "buy_date": "25-02-2018"
            })
        console.log(response);
        expect(response.body.message).toBeTruthy()
    })
})
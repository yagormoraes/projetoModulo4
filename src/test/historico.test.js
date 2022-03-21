import request from "supertest";
import app from "../app";

describe('GET /historico',()=>{
    test('Se esté pegando todos os usuarios',async ()=>{
        const resposta = await request(app).get('/historico');
        console.log(resposta);
        expect(resposta.statusCode).toBe(200);
    })
})

describe('GET /historico/id_user/:id_user', ()=>{
    test('Se esta pegando 1 usuário', async ()=>{
        const resposta = await request(app).get('/historico/id_user/1')
        console.log(resposta)
        expect(resposta.statusCode).toBe(200)
    })
})

describe('POST /historico',()=>{
    test('Se está inserindo 1 usuario/compra',async ()=>{
        const resposta = await request(app).post('/historico')
            .send({
                "id_user": 5,
                "item": "calcinha de renda",
                "preco": "R$13,00",
                "data_compra": "25-02-2013"
            });
        console.log(resposta.body);
        expect(resposta.body.mensagem).toBeTruthy();
    })

    test('Se o preço esta correto',async ()=>{
        const resposta = await request(app).post('/historico')
            .send({
                "id_user": 13,
                "item": "calcinha de renda",
                "preco": "50,00",
                "data_compra": "05-02-2013"
            });
        console.log(resposta.body);
        expect(resposta.body.erro).toBeTruthy();
    } )
})

describe('DELETE /historico/id_hist/:id_hist', ()=>{
    test('Se irá deletar um único histórico', async ()=>{
        const resposta = await request(app).delete('/historico/id_hist/44')
        console.log(resposta)
        expect(resposta.statusCode).toBe(200)
    })
})

describe('DELETE /historico/id_user/:id_user', ()=>{
    test('Se irá deletar um único usuário', async ()=>{
        const resposta = await request(app).delete('/historico/id_user/5')
        console.log(resposta)
        expect(resposta.statusCode).toBe(200)
    })
})

describe('PUT /historico/id_hist/:id_hist', ()=>{
    test('Se está alterando um único historico, dado o usuario', async ()=>{
        const resposta = await request(app).put('/historico/id_hist/17')
            .send({
                "id_user": 26,
                "item": "garrafa termica",
                "preco": "R$15,00",
                "data_compra": "25-02-2018"
            })
        console.log(resposta);
        expect(resposta.body.mensagem).toBeTruthy()
    })
})
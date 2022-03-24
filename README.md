# Projeto API Livraria (Histórico)

Projeto do final do módulo 4, proporcionado pelo curso de WebDev FullStack da Resília Educação.

Projeto utilizando [Node.js](https://nodejs.org/en/) em conjunto do [Express](https://expressjs.com/).

## Objetivo:
Esse projeto tem como objetivo a criação de uma API RESTful do histórico de compras de um cliente de uma livraria, onde é possivel utilizar as operações CRUD.

## Pré-requisitos:
- Node.js v.16.14.0
- NPM v.8.3.1

## Pacotes:
- [Express](https://www.npmjs.com/package/express): v4.17.3
- [Nodemon](https://www.npmjs.com/package/nodemon): v2.0.15
- [SQLite](https://www.npmjs.com/package/sqlite3): v5.0.2
- [Jest](https://www.npmjs.com/package/jest): v27.5.1
- [Supertest](https://www.npmjs.com/package/supertest): v6.2.2
- [CORS](https://www.npmjs.com/package/cors): v2.8.5

## Instalação

Passo 1: Clone o resositório
```
https://github.com/yagormorares/projetoModulo4.git
```

Passo 2: Instale os pacotes
```
npm install
```

Passo 3: Popule o banco de dados
```
npm run populate
```

Passo 4: Inicie o servidor
```
npm start
```

## Rotas
* **GET /purchase_history**
- Rota que retorna todos os históricos presentes.

Resposta esperada:
```
{
	"allHistory": [
		{
			"ID_HIST": <Int>,
			"ID_USER": <Int>,
			"ITEM": <String>,
			"PRICE": <String>,
			"BUY_DATE": <String>
		},
        
        {...}
		
	],
	"error": <Boolean>
}
```

* **GET /purchase_history/id_user/{id_user}**
- Rota que retorna o histórico de 1 usuário.

Resposta esperada:
```
{
	"purshase_history": [
		{
			"ID_HIST": <Int>,
			"ID_USER": <Int>,
			"ITEM": <String>,
			"PRICE": <String>,
			"BUY_DATE": <String>
		},
        
        {...}
	],
	"error": <Boolean>
}
```

* **GET /purchase_history/id_hist/{id_hist}**
- Rota que retorna um histórico.

Resposta esperada:
```
{
	"purchaseHistory": [
		{
			"ID_HIST": <Int>,
			"ID_USER": <Int>,
			"ITEM": <String>,
			"PRICE": <String>,
			"BUY_DATE": <String>
		}
	],
	"error": <Boolean>
}
```

* **POST /purchase_history**
- Rota que faz a inserção de uma nova compra ao histórico.

Requisição esperada:
```
{
	"id_user": 5,
	"item": "Fahreinheit 456",
	"price": "R$20,00",
	"buy_date": "05-12-2020"
}
```

Resposta esperada:
```
{
	"msg": <String> ,
	"user": {
		"id_user": <Int>,
	    "item": <String>,
	    "price": <String>,
	    "buy_date": <String>
	},
	"error": <Boolean>
}
```

* **DELETE /purchase_history/id_user/{id_user}**
- Rota que faz a deleção de todo o histórico, dado um usuário.

Resposta esperada:
```
{
	"delete_purchase_history": <String>,
	"error": <Boolean>
}
```

* **DELETE /purchase_history/id_hist/{id_hist}**
- Rota que faz a deleção de somente 1 histórico.

Resposta esperada:
```
{
	"delete_purchase_history": <String>,
	"error": <Boolean>
}
```

* **PUT /purchase_history/id_hist/{id_hist}**
- Rota que atualiza 1 histórico.

Requisição esperada:
```
{
	"id_user": <Int>,
	"item": <String>,
	"price": <String>,
	"buy_date": <String>
}
```

Resposta esperada:
```
{
	"msg": <String> ,
	"usuario": {
		"id_user": <Int>,
	    "item": <String>,
	    "price": <String>,
	    "buy_date": <String>
	},
	"error": <Boolean>
}
```

## Rodando os Testes
Para rodar os testes, utilizando [Jest](https://jestjs.io/pt-BR/docs/getting-started) e [Supertest](https://jestjs.io/pt-BR/docs/testing-frameworks#expressjs), é dando o seguinte comando:
```
npm test
```
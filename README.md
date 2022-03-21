# Projeto API Livraria (Histórico)

Projeto do final do módulo 4, proporcionado pelo curso de WebDev FullStack da Resília Educação.

Projeto utilizando [Node.js](https://nodejs.org/en/) em conjunto do [Express](https://expressjs.com/).

## Objetivo:
Esse projeto tem como objetivo a criação de uma API RESTful do histórico de compras de um cliente de uma livraria, onde é possivel utilizar as operações CRUD nas entidades [SEM NOME].

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

Passo 3: Inicie o servidor
```
npm start
```

## Rotas
* **GET /historico**

Resposta esperada:
```
{
	"historicoTodos": [
		{
			"ID_HIST": <Int>,
			"ID_USER": <Int>,
			"ITEM": <String>,
			"PRECO": <String>,
			"DATA_COMPRA": <String>
		},
        
        {...}
		
	],
	"erro": <Boolean>
}
```

* **GET /historico/id_user/{id_user}**

Resposta esperada:
```
{
	"historico": [
		{
			"ID_HIST": <Int>,
			"ID_USER": <Int>,
			"ITEM": <String>,
			"PRECO": <String>,
			"DATA_COMPRA": <String>
		},
        
        {...}
	],
	"erro": <Boolean>
}
```

* **GET /historico/id_hist/{id_hist}**

Resposta esperada:
```
{
	"historico": [
		{
			"ID_HIST": <Int>,
			"ID_USER": <Int>,
			"ITEM": <String>,
			"PRECO": <String>,
			"DATA_COMPRA": <String>
		}
	],
	"erro": <Boolean>
}
```

* **POST /historico**

Requisição esperada:
```
{
	"ID_USER": <Int>,
	"ITEM": <String>,
	"PRECO": <String>,
	"DATA_COMPRA": <String>
}
```

Resposta esperada:
```
{
	"mensagem": <String> ,
	"usuario": {
		"ID_USER": <Int>,
	    "ITEM": <String>,
	    "PRECO": <String>,
	    "DATA_COMPRA": <String>
	},
	"erro": <Boolean>
}
```

* **DELETE /historico/id_user/{id_user}**

Resposta esperada:
```
{
	"deleção_historico": <String>,
	"erro": <Boolean>
}
```

* **DELETE /historico/id_hist/{id_hist}**

Resposta esperada:
```
{
	"deleção_historico": <String>,
	"erro": <Boolean>
}
```

* **PUT /historico/id_hist/{id_hist}**

Requisição esperada:
```
{
	"ID_USER": <Int>,
	"ITEM": <String>,
	"PRECO": <String>,
	"DATA_COMPRA": <String>
}
```

Resposta esperada:
```
{
	"mensagem": <String> ,
	"usuario": {
		"ID_USER": <Int>,
	    "ITEM": <String>,
	    "PRECO": <String>,
	    "DATA_COMPRA": <String>
	},
	"erro": <Boolean>
}
```

## Rodando os Testes
Para rodar os testes, utilizando [Jest](https://jestjs.io/pt-BR/docs/getting-started) e [Supertest](https://jestjs.io/pt-BR/docs/testing-frameworks#expressjs), é dando o seguinte comando:
```
npm test
```
import sqlite3 from 'sqlite3'
sqlite3.verbose()

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const CaminhoArquivo = dirname(fileURLToPath(import.meta.url)) + '/database.db'


const bd = new sqlite3.Database(CaminhoArquivo)

//==== Histórico
const HISTORICO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "HISTORICO" (
    "ID_HIST" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ID_USER" INTEGER,
    "ITEM" varchar(64),
    "PRECO" varchar(64),
    "DATA_COMPRA" varchar(64)
    );`;

const ADD_HISTORICO_DATA = `
INSERT INTO HISTORICO (ID_HIST, ID_USER, ITEM, PRECO, DATA_COMPRA)
VALUES 
    (1, 1, 'pula pula do gugu', 'R$50,00', '10-01-2016'),
    (2, 1, 'livro guia do mochileiro das galaxias','R$150,00', '10-01-2016'),
    (3, 1, 'facas guinzo', 'R$300,00', '05-03-2019'),
    (4, 2, 'pula pula do gugu', 'R$50,00', '02-02-2022'),
    (5, 2, 'oculos rayban', 'R$149,99', '25-02-2022'),
    (6, 3, 'garrafa térmica', 'R$30,00', '25-02-2022' ),
    (7, 3, 'air pods Apple', 'R$500,00', '03-05-2019'),
    (8, 4, 'batedeira planetaria mondial','R$200,00', '06-11-2017' );
`

function criaTabelaHist() {
    bd.run(HISTORICO_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de Histórico");
    });
}

function populaTabelaHist() {
    bd.run(ADD_HISTORICO_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Histórico");
    });
}


bd.serialize( ()=> {
    criaTabelaHist();
    populaTabelaHist();
});
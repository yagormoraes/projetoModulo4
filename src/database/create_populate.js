import sqlite3 from 'sqlite3'
sqlite3.verbose()

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'

const db = new sqlite3.Database(filePath)

const PURCHASE_HISTORY_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PURCHASE_HISTORY" (
    "ID_HIST" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ID_USER" INTEGER,
    "ITEM" varchar(64),
    "PRICE" varchar(64),
    "BUY_DATE" varchar(64)
    );`;

const ADD_PURCHASE_HISTORY_DATA = `
INSERT INTO PURCHASE_HISTORY (ID_HIST, ID_USER, ITEM, PRICE, BUY_DATE)
VALUES 
    (1, 1, 'Sol Desvelado', 'R$50,00', '10-01-2016'),
    (2, 1, 'Duna','R$150,00', '10-01-2016'),
    (3, 1, 'Fundação', 'R$300,00', '05-03-2019'),
    (4, 2, 'Cavernas de Aço', 'R$50,00', '02-02-2022'),
    (5, 2, 'Ubik', 'R$149,99', '25-02-2022'),
    (6, 3, 'Fundação e Império', 'R$30,00', '25-02-2022' ),
    (7, 3, 'Eu, robô', 'R$500,00', '03-05-2019'),
    (8, 4, 'Neuromancer','R$200,00', '06-11-2017' );
`

function createTableHist() {
    db.run(PURCHASE_HISTORY_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de Histórico");
    });
}

function populateTableHist() {
    db.run(ADD_PURCHASE_HISTORY_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Histórico");
    });
}


db.serialize( ()=> {
    createTableHist();
    populateTableHist();
});
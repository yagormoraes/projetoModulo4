import express from "express";

import historicoLivrariaController from "./controller/historicoLivrariaController.js";

import bd from "./database/sqlite-db.js"; 

const app = express()
const port = 3000

historicoLivrariaController(app,bd)

app.listen(port, ()=>{
    console.log(`Servidor aberto em: http://localhost:${port}`);
})
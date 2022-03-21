import express from "express";
import historicoLivrariaController from "./controller/historicoLivrariaController.js";
import bd from "./database/sqlite-db.js"; 

const app = express()

app.use(express.json())

historicoLivrariaController(app,bd)

export default app

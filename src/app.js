import express from "express";
import cors from "cors"
import historicoLivrariaController from "./controller/historicoLivrariaController.js";
import bd from "./database/sqlite-db.js"; 

const app = express()

app.use(express.json())
app.use(cors())

historicoLivrariaController(app,bd)

export default app

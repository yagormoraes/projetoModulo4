import express from "express";
import cors from "cors"
import PurchaseHistoryController from "./controller/PurchaseHistoryController.js";
import db from "./database/sqlite-db.js"; 

const app = express()

app.use(express.json())
app.use(cors())

PurchaseHistoryController(app,db)

export default app

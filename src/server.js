import app from "./app.js";

const port = 3000
app.listen(port, ()=>{
    console.log(`Servidor aberto em: http://localhost:${port}`);
})
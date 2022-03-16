import sqlite3 from "sqlite3"
import { dirname } from 'path'
import { fileURLToPath } from 'url'

sqlite3.verbose()

const CaminhoArquivo = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const bd = new sqlite3.Database(CaminhoArquivo)

process.on('SIGINT',()=>{
    bd.close(()=>{
        console.log('Bando de Dados encerrado!');
        process.exit(0)
    })
})


export default bd
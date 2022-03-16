//import HistoricoLivraria from "../model/HistoricoLivraria.js"
import HistoricoLivrariaDAO from "../DAO/HistoricoLivrariaDAO.js"

const historicoLivrariaController = (app,bd) =>{
    const historicoDAO = new HistoricoLivrariaDAO(bd)

    app.get('/historico',(req,res)=>{
        historicoDAO.pegarTodosHistoricos()
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })
}

export default historicoLivrariaController
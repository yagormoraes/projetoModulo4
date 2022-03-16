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

    app.get('/historico/id_user/:id_user',(req,res)=>{
        const id_user = req.params.id_user
        historicoDAO.pegarUmUsuario(id_user)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

}

export default historicoLivrariaController
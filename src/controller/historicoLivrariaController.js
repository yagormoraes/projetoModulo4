import HistoricoLivraria from "../model/HistoricoLivraria.js"
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

    app.post('/historico', (req,res)=>{
        const body = req.body
        try{
            const novoHistorico = new HistoricoLivraria(body.id_user, body.item, body.preco, body.data_compra)
            historicoDAO.inserirNovoHistorico(novoHistorico)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })
        }catch(error){
            res.json({
                "msg":error.message,
                "erro":true
            })
        }
    })

    app.delete('/historico/id_hist/:id_hist',(req,res)=>{
        const id_hist = req.params.id_hist
        historicoDAO.deletaHistorico(id_hist)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.put('/historico/id_hist/:id_hist',(req,res)=>{
        const id_hist = req.params.id_hist
        const body = req.body

        try{
            const histAtualizado = new HistoricoLivraria(body.id_user, body.item, body.preco, body.data_compra)
            historicoDAO.atualizaHistorico(id_hist,histAtualizado)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })
        }catch(erro){
            res.json({
                "msg":erro.message,
                "erro":true
            })
        }
    })

}

export default historicoLivrariaController
import HistoricoLivraria from "../model/HistoricoLivraria.js"
import HistoricoLivrariaDAO from "../DAO/HistoricoLivrariaDAO.js"

const historicoLivrariaController = (app,bd) =>{
    const historicoDAO = new HistoricoLivrariaDAO(bd)

    app.get('/historico', async (req,res)=>{
        try{
            const resposta = await historicoDAO.pegarTodosHistoricos()
            res.json(resposta)
        }catch(erro){
            res.json(erro)
        }
    })

    app.get('/historico/id_user/:id_user',async (req,res)=>{
        try {
            const id_user = req.params.id_user
            const resposta = await historicoDAO.pegarUmUsuario(id_user)
            res.json(resposta)
        } catch (erro) {
            res.json(erro)
        }

    })

    // app.get('/historico/id_hist/:id_hist', async (req,res)=>{
    //     try {
    //         const id_hist = req.params.id_hist
    //         const respostaHist = await historicoDAO.pegarUmHistorico(id_hist)
    //         res.json(respostaHist)
    //     } catch (erro) {
    //         res.json(erro)
    //     }
    // })

    app.post('/historico', async (req,res)=>{
        const body = req.body
        try{
            const novoHistorico = new HistoricoLivraria(body.id_user, body.item, body.preco, body.data_compra)
            const resposta = await historicoDAO.inserirNovoHistorico(novoHistorico)
            res.json(resposta)
        }catch(error){
            res.json({
                "msg":error.message,
                "erro":true
            })
        }
    })

    app.delete('/historico/id_hist/:id_hist', async (req,res)=>{
        try{
            const id_hist = req.params.id_hist
            const resposta =  await historicoDAO.deletaHistorico(id_hist)
            res.json(resposta)
        }catch(erro){
            res.json(erro)
        }
    })

    app.delete('/historico/id_user/:id_user', async (req,res)=>{
        try {
            const id_user = req.params.id_user
            const resposta = await historicoDAO.deletarUmHistorico(id_user)
            res.json(resposta)
        } catch (error) {
            res.json(error)
        }
    })

    app.put('/historico/id_hist/:id_hist', async (req,res)=>{
        const id_hist = req.params.id_hist
        const body = req.body
        try{
            const histAtualizado = new HistoricoLivraria(body.id_user, body.item, body.preco, body.data_compra)
            const resposta = await historicoDAO.atualizaHistorico(id_hist,histAtualizado)
            res.json(resposta)
        }catch(erro){
            res.json({
                "msg":erro.message,
                "erro":true
            })
        }
    })

}

export default historicoLivrariaController
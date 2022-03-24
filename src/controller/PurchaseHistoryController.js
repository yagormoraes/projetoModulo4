import PurchaseHistory from "../model/PurchaseHistory.js"
import PurchaseHistoryDAO from "../DAO/PurchaseHistoryDAO.js"


const PurchaseHistoryController = (app,bd) =>{
    const purchaseHistDAO = new PurchaseHistoryDAO(bd)

    app.get('/purchase_history', async (req,res)=>{
        try{
            const response = await purchaseHistDAO.getAllPurchaseHistory()
            res.json(response)
        }catch(erro){
            res.json(erro)
        }
    })

    app.get('/purchase_history/id_user/:id_user',async (req,res)=>{
        try {
            const id_user = req.params.id_user
            const response = await purchaseHistDAO.getUser(id_user)
            res.json(response)
        } catch (erro) {
            res.json(erro)
        }

    })

    app.get('/purchase_history/id_hist/:id_hist', async (req,res)=>{
        try {
            const id_hist = req.params.id_hist
            const responseHist = await purchaseHistDAO.getPurchaseHistory(id_hist)
            res.json(responseHist)
        } catch (erro) {
            res.json(erro)
        }
    })

    app.post('/purchase_history', async (req,res)=>{
        const body = req.body
        try{
            const newPurchHist = new PurchaseHistory(body.id_user, body.item, body.price, body.buy_date)
            const response = await purchaseHistDAO.insertPurchaseHistory(newPurchHist)
            res.json(response)
        }catch(error){
            res.json({
                "msg":error.message,
                "erro":true
            })
        }
    })

    app.delete('/purchase_history/id_hist/:id_hist', async (req,res)=>{
        try{
            const id_hist = req.params.id_hist
            const response =  await purchaseHistDAO.deletePurchaseHistory(id_hist)
            res.json(response)
        }catch(erro){
            res.json(erro)
        }
    })

    app.delete('/purchase_history/id_user/:id_user', async (req,res)=>{
        try {
            const id_user = req.params.id_user
            const response = await purchaseHistDAO.deleteUserPurchaseHistory(id_user)
            res.json(response)
        } catch (error) {
            res.json(error)
        }
    })

    app.put('/purchase_history/id_hist/:id_hist', async (req,res)=>{
        const id_hist = req.params.id_hist
        const body = req.body
        try{
            const updatedHist = new PurchaseHistory(body.id_user, body.item, body.price, body.buy_date)
            const response = await purchaseHistDAO.updatePurchaseHistory(id_hist,updatedHist)
            res.json(response)
        }catch(erro){
            res.json({
                "msg":erro.message,
                "erro":true
            })
        }
    })

}

export default PurchaseHistoryController
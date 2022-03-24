class PurchaseHistoryDAO{
    constructor(database){
        this.db = database
    }

    getAllPurchaseHistory = ()=>{
        return new Promise((resolve,reject)=>{
            this.db.all('SELECT * FROM PURCHASE_HISTORY',
            (error, rows)=>{
                if(error){
                    reject({
                        "msg":error.message,
                        "error":true
                    })
                }else{
                    resolve({
                        "allHistory":rows,
                        "error":false
                    })
                }
            })
        })
    }

    getUser = (id_user) =>{
        return new Promise((resolve,reject)=>{
            this.db.all('SELECT * FROM PURCHASE_HISTORY WHERE ID_USER = ?',
            id_user,
            (error,rows)=>{
                if(error){
                    reject({
                        "msg":error.message,
                        "error":true
                    })
                }else{
                    resolve({
                        "purshase_history":rows,
                        "error":false
                    })
                    
                }
            })
        })
    }

    getPurchaseHistory = (id_hist) =>{
        return new Promise((resolve,reject)=>{
            this.db.all('SELECT * FROM PURCHASE_HISTORY WHERE ID_HIST = ?',
            id_hist,
            (error,rows)=>{
                if(error){
                    reject({
                        "msg":error.message,
                        "error":true
                    })
                }else{
                    resolve({
                        "purchaseHistory":rows,
                        "error":false
                    })
                }
            })
        })
    }

    insertPurchaseHistory = (newPurchaseHistory) =>{
        return new Promise((resolve,reject)=>{
            this.db.run('INSERT INTO PURCHASE_HISTORY(ID_USER, ITEM, PRICE, BUY_DATE) VALUES (?, ?, ?, ?)',
            newPurchaseHistory.id_user, newPurchaseHistory.item, newPurchaseHistory.price, newPurchaseHistory.buy_date,
            (error)=>{
                if(error){
                    reject({
                        "msg":error.message,
                        "error":true
                    })
                }else{
                    resolve({
                        "msg":`User with ID = ${newPurchaseHistory.id_user} successfully entered.`,
                        "user":newPurchaseHistory,
                        "error":false
                    })
                }
            })
        })

    }

    deletePurchaseHistory = (id_hist)=>{
        return new Promise((resolve,reject)=>{
            this.db.run('DELETE FROM PURCHASE_HISTORY WHERE ID_HIST = ?',
            id_hist,
            (error)=>{
                if(error){
                    reject({
                        "msg":error.message,
                        "error":true
                    })
                }else{
                    resolve({
                        "delete_purchase_history":`Purchase History with ID_HIST = ${id_hist} successfully deleted`,
                        "error":false
                    })
                }
            })
        })
    }

    deleteUserPurchaseHistory = (id_user)=>{
        return new Promise((resolve,reject)=>{
            this.db.run('DELETE FROM PURCHASE_HISTORY WHERE ID_USER = ?',
            id_user,
            (error)=>{
                if(error){
                    reject({
                        "msg":error.message,
                        "error":true
                    })
                }else{
                    resolve({
                        "delete_purchase_history":`Purchase History from ID_USER = ${id_user} successfully deleted`,
                        "error":false
                    })
                }
            })
        })
    }

    updatePurchaseHistory = (id_hist, newHist)=>{
        return new Promise((resolve,reject)=>{
            this.db.run('UPDATE PURCHASE_HISTORY SET ID_USER = ?, ITEM = ?, PRICE = ?, BUY_DATE = ? WHERE ID_HIST = ?',
            newHist.id_user, newHist.item, newHist.price, newHist.buy_date, id_hist,
            (error)=>{
                if(error){
                    reject({
                        "msg": error.message,
                        "error": true
                    })
                }else{
                    resolve({
                        "msg": `Purchase History with ID_HIST = ${id_hist} successfully updated`,
                        "user": newHist,
                        "error":false
                    })
                }
                
            })
        })
    }
}



export default PurchaseHistoryDAO
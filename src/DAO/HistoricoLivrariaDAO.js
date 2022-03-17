class HistoricoLivrariaDAO{
    constructor(bancoDados){
        this.bancoDados = bancoDados
    }

    pegarTodosHistoricos = ()=>{
        return new Promise((resolver,rejeitar)=>{
            this.bancoDados.all('SELECT * FROM HISTORICO',
            (erro, linhas)=>{
                if(erro){
                    rejeitar({
                        "mensagem":erro.message,
                        "erro":true
                    })
                }else{
                    resolver({
                        "historico":linhas,
                        "erro":false
                    })
                }
            })
        })
    }

    pegarUmUsuario = (id_usuario) =>{
        return new Promise((resolver,rejeitar)=>{
            this.bancoDados.all('SELECT * FROM HISTORICO WHERE ID_USER = ?',
            id_usuario,
            (erro,linhas)=>{
                if(erro){
                    rejeitar({
                        "mensagem":erro.message,
                        "erro":true
                    })
                }else{
                    resolver({
                        "historico":linhas,
                        "erro":false
                    })
                    
                }
            })
        })
    }

    inserirNovoHistorico = (novoHistorico) =>{
        return new Promise((resolver,rejeitar)=>{
            this.bancoDados.run('INSERT INTO HISTORICO(ID_USER, ITEM, PRECO, DATA_COMPRA) VALUES (?, ?, ?, ?)',
            novoHistorico.id_user, novoHistorico.item, novoHistorico.preco, novoHistorico.data_compra,
            (erro)=>{
                if(erro){
                    rejeitar({
                        "mensagem":erro.message,
                        "erro":true
                    })
                }else{
                    resolver({
                        "mensagem":`Usuario com ID=${novoHistorico.id_user} com sucesso.`,
                        "usuario":novoHistorico,
                        "erro":false
                    })
                }
            })
        })

    }

    deletaHistorico = (id_hist)=>{
        return new Promise((resolver,rejeitar)=>{
            this.bancoDados.run('DELETE FROM HISTORICO WHERE ID_HIST = ?',
            id_hist,
            (erro)=>{
                if(erro){
                    rejeitar({
                        "mensagem":erro.message,
                        "erro":true
                    })
                }else{
                    resolver({
                        "deleção_historico":`Historico com id ${id_hist} deletado com sucesso`,
                        "erro":false
                    })
                }
            })
        })
    }
}



export default HistoricoLivrariaDAO
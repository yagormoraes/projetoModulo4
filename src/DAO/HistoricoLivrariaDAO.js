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
}



export default HistoricoLivrariaDAO
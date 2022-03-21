class HistoricoLivraria{
    constructor(id_user,item,preco,data_compra){
        this.id_user = id_user
        this.item = item
        this.preco = this.validarPreco(preco)
        this.data_compra = data_compra

    }

    validarPreco = (preco)=>{
        if(preco.indexOf('R') == 0 && preco.indexOf('$') == 1){
            return preco
        }
        else{
            throw new Error('A moeda que é aceita no estabelecimento é somente o real (R$), introduza novamente o preço')
        }
    }
}

export default HistoricoLivraria
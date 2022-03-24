class PurchaseHistory{
    constructor(id_user,item,price,buy_date){
        this.id_user = id_user
        this.item = item
        this.price = this.validatePrice(price)
        this.buy_date = buy_date

    }

    validatePrice = (price)=>{
        if(price.indexOf('R') == 0 && price.indexOf('$') == 1){
            return price
        }
        else{
            throw new Error('The bookstore only accepts values ​​in reais (R$), enter the price correctly')
        }
    }
}

export default PurchaseHistory

//The bookshop only accept real (R$), put the price correctly
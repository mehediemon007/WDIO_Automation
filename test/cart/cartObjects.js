class CartObjects{

    get grandTotalAmount(){
        return $("//*[@class='grand-total-value']");
    }
}

module.exports = new CartObjects();
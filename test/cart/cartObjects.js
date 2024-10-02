class CartObjects{

    get grandTotalAmount(){
        return $("//*[@class='grand-total-value']");
    }
}

export default new CartObjects();
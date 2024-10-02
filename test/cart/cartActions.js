const cartObjects = require("./cartObjects");

class CartActions{

    async getGrandTotalAmount(){
        const grandTotal = await cartObjects.grandTotalAmount.getText();
        return grandTotal;
    }

}

module.exports = new CartActions();
const addToCartObjects = require("./addToCartObjects");


class AddToCartActions{

    async selectProduct(){
        await addToCartObjects.nikeShoe.click();
    }

    async selectSize(){
        await addToCartObjects.size.click();
    }

    async selectColor(){
        await addToCartObjects.color.click();
    }

    async enterQuantity(qty){
        await addToCartObjects.quantity.setValue(qty);
    }

    async getSingleProductPrice(){
        const productPrice = await addToCartObjects.singleProductSalePrice.getText();
        return productPrice;
    }

    async clickOnViewCart(){
        await addToCartObjects.viewCart.click();
    }

    async addToCart(qty){
        await this.selectProduct();
        await this.selectSize();
        await this.selectColor();
        await this.enterQuantity(qty);
        await this.clickOnViewCart();
    }
}

module.exports = new AddToCartActions();
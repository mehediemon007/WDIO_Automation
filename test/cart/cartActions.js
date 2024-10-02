import cartObjects from "./cartObjects";

class CartActions{

    async getGrandTotalAmount(){
        await cartObjects.grandTotalAmount.waitForDisplayed();
        const grandTotal = await cartObjects.grandTotalAmount.getText();
        return grandTotal;
    }

}

export default new CartActions();
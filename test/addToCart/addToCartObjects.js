class AddToCartObjects{

    get nikeShoe(){
        return $("//span[contains(.,'Nike react phantom run flyknit 2')][1]");
    }

    get singleProductSalePrice(){
        return $(".sale-price");
    }

    get size(){
        return $("//a[conatins(text(),'S') and [@href='#']]");
    }

    get color(){
        return $("//a[conatins(text(),'Black') and [@href='#']]");
    }

    get quantity(){
        return $("//input[@name='qty']");
    }

    get addToCartButton(){
        return $("//button[contains(text(),'ADD TO CART']");
    }

    get viewCart(){
        return $("//a[@href='/cart' and [@class='add-cart-popup-button']]");
    }

}

module.exports = new AddToCartObjects();
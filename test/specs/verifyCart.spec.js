import searchActions from "../search/serachActions";
import addToCartActions from "../addToCart/addToCartActions";
import cartActions from "../cart/cartActions";
import utilities from "../utils/utilities";

const quantity = 3

describe("Evershop site Add Product To Cart and Verify Amount", ()=>{

    it("Should able to search valid product successfully", async() =>{

        await searchActions.searchProduct();

    })

    it("Should able to add product on cart successfully", async() =>{

        await addToCartActions.addToCart(quantity);

    })

    it("Should able to varify product amount in cart successfully", async() =>{

        const getPrice = utilities.getAmountIntoNumber(await addToCartActions.getSingleProductPrice());
        const expectedAmount = getPrice * quantity;
        const actualAmount = utilities.getAmountIntoNumber(await cartActions.getGrandTotalAmount());
        expect(expectedAmount).toEqual(actualAmount);

    })

})
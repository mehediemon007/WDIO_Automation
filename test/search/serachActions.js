const searchObjects = require('./searchObjects');

const searchText ='Nike';
const productCount = 3;

class SearchActions{

    async ckickSearchIcon(){
        await searchObjects.searchIcon.click();
    }

    async enterProductNameInSearch(){
        await searchObjects.searchInputField.setValue(searchText);
    }

    async enterSearch(){
        await browser.keys("Enter");
    }

    async searchProduct(){
        await this.ckickSearchIcon();
        await this.enterProductNameInSearch();
        await this.enterSearch();
    }
}

module.exports = new SearchActions();
class SearchObjects{
    get searchIcon(){
        return $('.search-icon');
    }

    get searchInputField(){
        return $("//input[@placeholder='Search']");
    }
    
}

module.exports = new SearchObjects();
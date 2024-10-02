class SearchObjects{
    get searchIcon(){
        return $('.search-icon');
    }

    get searchInputField(){
        return $("//input[@placeholder='Search']");
    }
    
}

export default new SearchObjects();
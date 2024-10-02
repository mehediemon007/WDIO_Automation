class Utilities {

    getAmountIntoNumber(text){
        const numberData = parseFloat(text.replace(/[$,]/g,""));
        return numberData;
    }
}

export default new Utilities();
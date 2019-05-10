export default class CountriesService {
    baseUrl = "https://restcountries.eu/rest/v2/"
    getAll = () => {
        const results = fetch(this.baseUrl + 'all/');
        return results.json();
    }
    //@params: id: alpha3Code 
    getMoreDetails = (id) => {
        return fetch( this.baseUrl + `alpha/${id}`,{method: 'GET'}).then(responce => responce.json());
    }
}
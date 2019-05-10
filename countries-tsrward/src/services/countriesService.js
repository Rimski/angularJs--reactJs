export class CountriesService {
    baseUrl = "https://restcountries.eu/rest/v2/"
    getAll = async () => {
        const results = await fetch(this.baseUrl + 'all/');
        return results.json();
    }
    //@params: id: alpha3Code 
    getMoreDetails = async (id) => {
        return await fetch(this.baseUrl + `alpha/${id}`, { method: 'GET' }).then(responce => responce.json());
    }
}
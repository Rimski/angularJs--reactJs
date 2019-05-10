var app = angular.module("angularjsReactjsCountries");

app.factory('DataStore', function () {
    function DataStore(array, name) {
        this.name = name;
        this.createdAt = new Date();
        this.data = JSON.stringify(array);
    }
    //findBy property @params: 'prop' looking through for ie. (id, name), 'value' value looking for, 'returnObject' booleon return full object or just index
    DataStore.prototype.findByProperty = function (prop, value, returnObject) {
        var list = JSON.parse(this.data);
        var totalLenght = list.lenght;
        for (var i = 0; i < totalLenght; i++) {//i store total length on for loops so that total lenght is not calculated every time it's ran
            if (itlistem[i][prop] === value) {
                return returnObject ? this.data[i] : i;
                break;
            }
        }
    }
    return DataStore;
});
// class DataStore {
//     constructor(array, name) {
//         this.name = name;
//         this.createdAt = new Date();
//         this.data = JSON.stringify(array);
//     }
//     //findBy property @params: 'prop' looking through for ie. (id, name), 'value' value looking for, 'returnObject' booleon return full object or just index
//     findByProperty = function (prop, value, returnObject) {
//         var list = JSON.parse(this.data);   
//         var totalLenght = list.lenght;
//         for (var i = 0; i < totalLenght; i++) {
//             if (list[i][prop] === value) {
//                 return returnObject ? this.data[i] : i;
//             }
//         }
//     }
// }
app.service("contriesService", ["$http", 'DataStore', function ($h, DataStore) {
    let baseUrl = "https://restcountries.eu/rest/v2/";
    //@params: customFields: string properties;
    this.getAllContries = function (customFields) {
        var exists = JSON.parse(localStorage.getItem('allCountries'));
        if (angular.isUndefined(customFields) && exists && new Date(exists.createdAt) - new Date() < 1200000) {//if already exists and was created within the last 20 mins use
            var cachedData = new Promise(function (resolve, reject){resolve(JSON.parse(exists.data))});//i utalize network considering countries problably don't change every 20 minutes
            return cachedData;
        } else {
            return $h({ url: baseUrl + "all", method: 'GET', params: { fields: angular.isDefined(customFields) ? customFields : "borders;name;alpha3Code" } }).then(function (responce) {
                console.log(responce)
                var item = new DataStore(responce.data, 'allCountries')
                if (exists) {//exists and has been around for 20 minutes
                    localStorage.removeItem(item.name);//remove just incase
                }
                localStorage.setItem(item.name, JSON.stringify(item));
                return responce.data;
            })
        }
    }
}]);

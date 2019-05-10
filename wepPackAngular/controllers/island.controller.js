
var app = angular.module('angularjsReactjsCountries');

//@todo: get contries that are islands
//This component should display countries that are also islands and should incorporate reactJs components 
app.controller("islandController", ['$scope', "contriesService", "$q", function ($s, $cs, $q) {
    $s.debug = false;
    $s.islands = [];
    this.$onInit = function () {
        if ($s.debug) {
            console.log("island controller");
        }
        var contries = $cs.getAllContries();
        $q.all([contries]).then(function (responces) {
            if ($s.debug) {
                console.log("grouped responces: ", responces);
            }
            responces[0].map(function (country) {
                if (angular.isDefined(country.borders) && country.borders.length === 0) {
                    $s.islands.push(country);
                }
            });
        })
    }();
}])

// import BaseCountry from '../baseCountry';
// import {react2angular} from 'react2angular';
// var app = angular.module('angularjsReactjsCountries');
// app.component('baseCountry', react2angular(BaseCountry));
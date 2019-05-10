// var app = angular.module('angularjsReactjsCountries');
//@todo: 
//This component should ask what a user wants to do
// app.controller("homeController", ['$scope', '$location', function ($scope, $location) {//old way
    var homeController = function ($scope, $location) {
        $scope.debug = false;
    this.$onInit = function () {
        if ($scope.debug) {
            console.log("Home controller");
        }
    }
    $scope.routeTo = function (route) {
        $location.path(route);
    }
}
export default homeController;
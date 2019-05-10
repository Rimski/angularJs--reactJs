export default function ($routeProvider) {
    $routeProvider
        .when('/home',
            {
                templateUrl: ".views/home.html",
                controller: "homeController"
            }
        )
        .when('/islands',
            {
                templateUrl: "./views/islands.html",
                controller: "islandController"
            })
        .when('/countriesBordered',
            {//react component screen
                template: '<country-list><country-list>'
            })
        .otherwise({
            templateUrl: "./views/home.html",
            controller: "homeController"
        })
}
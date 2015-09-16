/*
ngRoute es nuestra dependencia
*/
var app = angular.module('apesol', ['ngRoute']);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/registro', {
            templateUrl: 'view/registro.html',
            controller: 'registroController'
        });
        $routeProvider.when('/cursos', {
            templateUrl: 'view/cursos.html',
            controller: 'cursosController'
        });
        $routeProvider.when('/cursos/:nombre', {
            templateUrl: 'view/cursos.html',
            controller: 'cursosController'
        });
        $routeProvider.when('/horarios', {
            templateUrl: 'view/horarios.html',
            controller: 'horariosController'
        });
        $routeProvider.otherwise({
            redirectTo: '/registro'
        });
    }
]);

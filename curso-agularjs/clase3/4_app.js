var app = angular.module('apesol', []);

//Controlador UNO
app.controller('registroController', function($scope){
  $scope.alumno = 'Juan Perez';
});

//Controlador DOS
app.controller('otroRegistroController', function($scope){
  $scope.alumno = 'Pedro Cruz';
});

var app = angular.module('apesol', []);

//Controlador UNO
app.controller('registroController', function($scope){
  //Define los 2 campos de ingreso
  $scope.alumno = {
    nombre : '',
    apellido : ''
  };
  //Define array alumnos
  $scope.alumnos = [];
  //Funcion click para anadir los datos
  $scope.agregarAlumno = function($event){
    var alumnoNuevo = $scope.alumno;
    //Anadimos
    $scope.alumnos.push({
      nombre : alumnoNuevo.nombre,
      apellido : alumnoNuevo.apellido
    });
    //Limpiamos los campos
    $scope.alumno.nombre = '';
    $scope.alumno.apellido = '';
  };
});

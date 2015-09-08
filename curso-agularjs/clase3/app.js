var app = angular.module('apesol', []);

//Controlador UNO
app.controller('registroController', function($scope){
  $scope.alumno = 'Juan Perez';
});

//Controlador DOS
app.controller('otroRegistroController', function($scope){
  $scope.alumno = 'Pedro Cruz';
});

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
  //Eliminamos registro
  $scope.eliminarAlumno = function($event, $index){
    //Remueve item de un array - posicion , y solo uno se remueve
    $scope.alumnos.splice($index, 1);
  };
  //Editar registro
  $scope.editarAlumno = function($event, $index, persona){
    //Copiamos la instancia de persona al modelo alumno
    $scope.alumno = {
      nombre : persona.nombre,
      apellido : persona.apellido
    };
  };
});

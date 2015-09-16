//Controlador Registro

/*
Incorporamos la fabrica alumnosFactory
Y la igualamos a $scope.alumnos
*/

app.controller('registroController', function($scope, alumnosFactory){
  //DEFINE $parent clase active
  $scope.$parent.classActive = 'registro';

  //Define los 2 campos de ingreso
  $scope.alumno = {
    nombre : '',
    apellido : ''
  };
  //Define array alumnos
  $scope.alumnos = alumnosFactory;
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

  //Agregamos el flag de editar y actualizar
  $scope.esAgregar = true;

  //Eliminamos registro
  $scope.eliminarAlumno = function($event, $index){
    //Remueve item de un array - posicion , y solo uno se remueve
    $scope.alumnos.splice($index, 1);
  };
  //Editar registro
  var indiceEditar = 0;
  $scope.editarAlumno = function($event, $index, persona){
    //Copiamos la instancia de persona al modelo alumno
    $scope.alumno = {
      nombre : persona.nombre,
      apellido : persona.apellido
    };
    indiceEditar = $index;
    //Flag false
    $scope.esAgregar = false;
  };

  //Actualizar registro
  $scope.actualizarAlumno = function($event){
    //Closure Variable
    var alumnoNuevo = $scope.alumno;
    //Reemplazamos valor
    $scope.alumnos[indiceEditar] = {
      nombre : alumnoNuevo.nombre,
      apellido : alumnoNuevo.apellido
    };
    //Limpiamos los campos
    $scope.alumno.nombre = '';
    $scope.alumno.apellido = '';
    //Flag true
    $scope.esAgregar = true;
  };

});

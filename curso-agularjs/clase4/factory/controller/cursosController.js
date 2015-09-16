//Controlador cursos

/*
Insertamos alumnosFactory
Y listamos los alumnos
*/

app.controller('cursosController', function($scope, $routeParams, alumnosFactory, scrollGo){
    //DEFINE $parent clase active
    $scope.$parent.classActive = 'cursos';

    $scope.cursos = {
        titulo : 'Cursos del Open University',
        nombre: ''
    };

    //EJEMPLO DE PARAMETOS PASADOS POR URL
    console.log($routeParams, '$routeParams');
    if($routeParams.nombre){
      $scope.cursos.nombre = $routeParams.nombre;
    }

    //EJEMPLO DE FACTORY
    $scope.alumnos = alumnosFactory;


    //EJEMPLO FACTORY RETORNA SCROLL
    //AGREGAR JQUERY PARA EL ANIMATE
    $scope.irAScroll = function($event, tipo){
      if(tipo === 'arriba'){
          scrollGo.go('#top');
      }else{
          scrollGo.go('#bottom');
      }
    };

});

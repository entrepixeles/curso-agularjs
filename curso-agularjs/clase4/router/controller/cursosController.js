//Controlador Registro
app.controller('cursosController', function($scope, $routeParams){
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

});

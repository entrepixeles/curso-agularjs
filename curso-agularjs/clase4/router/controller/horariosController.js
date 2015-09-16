//Controlador Registro
app.controller('horariosController', function($scope){
    //DEFINE $parent clase active
    $scope.$parent.classActive = 'horarios';

    $scope.horarios = {
        titulo : 'Horarios del Open University'
    };
});

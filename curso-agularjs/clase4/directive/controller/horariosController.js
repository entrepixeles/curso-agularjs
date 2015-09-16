//Controlador Registro
app.controller('horariosController', function($scope){
    //DEFINE $parent clase active
    $scope.$parent.classActive = 'horarios';

    $scope.horarios = {
        titulo : 'Horarios del Open University'
    };

    //EJEMPLO SCOPE HEREDADO
    $scope.nombre = '';

    //EJEMPLO SCOPE ASIGNADO
    $scope.nombre2 = 'JOAN';
    $scope.color = 'yellow';
    $scope.cambioColorAzul = function($event){
      $scope.color = 'blue';
    };
    $scope.cambioColorRojo = function($event){
      $scope.color = 'red';
    };
    $scope.cambioColorAnaranjado = function($event){
      $scope.color = 'orange';
    };


    //DIRECTIVE 3 URL VIDEO YOUTUBE
    $scope.youtubeIdVideo = 'A-WBKfnqBHM';
    $scope.cargarVideo = function(){
      $scope.youtubeIdVideo = $scope.idVideo;
    };

});

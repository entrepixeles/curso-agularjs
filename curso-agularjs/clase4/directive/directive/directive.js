//PRIMERA DIRECTIVA DE EJEMPLO
app.directive('holaMundo', function() { //CONVENCION DE NOMBRE CAMELCASE - GUIONES
    return {
     restrict : 'EAC', //E -> ELEMENTO , A -> ATRIBUTO, C -> Clase
     template : '<h1 style="color:red">Hola Mundo !!!</h1>',
     //templateUrl: 'templates/directive.html' //TAMBIEN PODRIA SER UN TEMPPLATE DESDE UNA URL
     replace : true //REEMPLAZA LA DIRECTIVA
    }
});

//DIRECTIVA EJEMPLO DE HEREDADO SCOPE HEREDADO
app.directive('hola', function() { //CONVENCION DE NOMBRE CAMELCASE - GUIONES
    return {
     restrict : 'EAC', //E -> ELEMENTO , A -> ATRIBUTO, C -> Clase
     template : '<h1 style="color:blue">Hola {{nombre}} !!!</h1>',
     //templateUrl: 'templates/directive.html' //TAMBIEN PODRIA SER UN TEMPPLATE DESDE UNA URL
     replace : true //REEMPLAZA LA DIRECTIVA
    }
});

//DIRECTIVA EJEMPLO SCOPE ASIGNADO
app.directive('hola2', function() { //CONVENCION DE NOMBRE CAMELCASE - GUIONES
    return {
     restrict : 'EAC', //E -> ELEMENTO , A -> ATRIBUTO, C -> Clase
     template : '<h1 style="color:{{color}}">Hola {{nombre}} !!!</h1>',
     //templateUrl: 'templates/directive.html' //TAMBIEN PODRIA SER UN TEMPPLATE DESDE UNA URL
     replace : true, //REEMPLAZA LA DIRECTIVA
     scope : {
       aQuien : '=', //Por referencia //Recive un objeto
       queColor : '@' //Por valor //No Recive un objeto
     },
     link : function(scope, elements, attrs){
       console.log(scope, 'scope');
       console.log(elements, 'elements');
       console.log(attrs, 'attrs');
       scope.nombre = scope.aQuien;
       scope.color = scope.queColor;

       //OBSERVANDO CAMBIO DE MODELO
      scope.$watch('aQuien', function(newValue, oldValue){
         if(newValue != oldValue){
           scope.nombre = scope.aQuien;
         }
       });

       //OBSERVANDO CAMBIO DE ATRIBUTO
      attrs.$observe('queColor', function(newValue, oldValue){
         if(newValue != oldValue){
           scope.color = scope.queColor;
         }
       });
     }
    }
});


//DIRECTIVE VIDEO YOUTUBE
//Render video youtube
app.directive('youtube', function($sce) {
  return {
    restrict: 'EA',
    scope: {
      idVideo : '@' //POR VALOR
    },
    replace: true,
    template: '<iframe width="560" height="315" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
    link: function (scope, element, attrs) {
        attrs.$observe('idVideo',function(val){
            scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + val);
        });
    }
  };
});

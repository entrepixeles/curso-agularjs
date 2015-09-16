//FACTORY
//Esta fabrica nos provee de alumnos para el controlador de registro y cursos
//Factory para compartir datos entre alumnos
app.factory('alumnosFactory', function(){
  return [
    {
      nombre : 'Juan',
      apellido : 'Perez'
    },
    {
      nombre : 'Octavio',
      apellido : 'Paz'
    },
    {
      nombre : 'Steve',
      apellido : 'Jobs'
    },
    {
      nombre : 'John',
      apellido : 'Resig'
    }
  ];
});

//EJEMPLO DE FABRICA QUE DEVUELVE UN METODO
//SCROLL TO
//AGREGAR JQUERY POR ANIMATE
app.factory('scrollGo',
    function() {
        return {
            go: function(elm){
                angular.element('body').animate({
                  scrollTop: angular.element(elm).offset().top
                }, 'slow');
            }
        };
    }
);

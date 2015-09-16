//FILTER
//PONE UN SIGNO CORRECTO
app.filter('check', function(){
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

//DEVUELVE CANTIDAD DE CARACTERES
app.filter('charcount', function(){
  return function(input) {
    return ((input).split('')).length;
  };
});

function tablaDeSiete() {
    var numero = 7;
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}

tablaDeSiete();

function imprimirPiramide(niveles) {
    for (let i = 1; i <= niveles; i++) {
      let espacio = ' '.repeat(niveles - i);
      let asteriscos = '*'.repeat(2 * i - 1);
      console.log(espacio + asteriscos);
    }
  }
  
  imprimirPiramide(5);
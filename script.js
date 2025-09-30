function Navegar(ruta) {
    switch(ruta){
        case "Binter": return window.location.href = 'Binter.html';
        case "Ryaner": return window.location.href = 'Ryaner.html';     
        case "Iberia": return window.location.href = 'Iberia.html';
        case "Menu": return window.location.href = 'index.html';    
    }
}

var myPlane = new Object();
myPlane.filas;
myPlane.columnas;
myPlane.nombre;
myPlane.precio;
myPlane.asientos;
myPlane.reservar =function() {
  
};
myPlane.liberar =function() {
  
};

var Plane= function (filas,columnas,nombre,precio){
  this.filas= filas;
  this.columnas= columnas;
  this.nombre= nombre;
  this.precio= precio;
  this.reservar= function(){
    
  } ;
  this.liberar= function(){
    
  } ;
  // Crear matriz de asientos
  this.asientos = [];
  for (let f = 0; f < filas; f++) {
    this.asientos[f] = [];
    for (let c = 0; c < columnas; c++) {
      this.asientos[f][c] = false; 
    }
  }

  // Método para reservar un asiento
  this.reservar = function (fila, columna) {
    if (fila >= 0 && fila < this.filas && columna >= 0 && columna < this.columnas) {
      if (!this.asientos[fila][columna]) {
        this.asientos[fila][columna] = true;
        console.log(`Asiento (${fila}, ${columna}) reservado.`);
      } else {
        console.log(`Asiento (${fila}, ${columna}) ya está reservado.`);
      }
    } else {
      console.log("Asiento fuera de rango.");
    }
  };

  // Método para liberar un asiento
  this.liberar = function (fila, columna) {
    if (fila >= 0 && fila < this.filas && columna >= 0 && columna < this.columnas) {
      if (this.asientos[fila][columna]) {
        this.asientos[fila][columna] = false;
        console.log(`Asiento (${fila}, ${columna}) liberado.`);
      } else {
        console.log(`Asiento (${fila}, ${columna}) ya estaba libre.`);
      }
    } else {
      console.log("Asiento fuera de rango.");
    }
  };
}
let teatro = new Plane(6, 20, "binter", 10);

teatro.reservar(2, 3);  
teatro.liberar(7, 2);   
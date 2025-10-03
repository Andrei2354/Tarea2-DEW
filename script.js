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
myPlane.reservar =function() {};
myPlane.liberar =function() {};
var Plane= function (filas,columnas,nombre,precio){
  this.filas= filas;
  this.columnas= columnas;
  this.nombre= nombre;
  this.precio= precio;
  // Crear matriz de asientos
  document.write ("<section class='sectionHorizontal'>");
  this.asientos = [];
  for (let f = 0; f < filas; f++) {
    document.write ("<section class='sectionHorizontal1'>");
    this.asientos[f] = [];
    for (let c = 0; c < columnas; c++) {
      document.write ("<div class='asiento'>" + c + "</div>");
      this.asientos[f][c] = false; 
    }
    document.write ("</section>");
  }
  document.write ("</section>");

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
let avion = new Plane(4, 45, "binter", 10);

//SIMULADOR DE PRECIOS DE VENTA CON IVA DE 21% Y DESCUENTO DEL 10%
class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
    }
    calcularPrecio(){
        this.precio = this.precio * 1.21;
        this.precio= this.precio * 0.90;
    }
}
const productos = [];
productos.push(new Producto("Fideos", 100, 5));
productos.push(new Producto("Harina", 99.5, 10));
productos.push(new Producto("Azucar", 50.5, 7));
productos.push(new Producto("Cafe", 400.5, 8));

for (const producto of productos){
    producto.calcularPrecio();
    
}
for (let i=0; i<productos.length; i++){
    console.log(productos[i]);
}



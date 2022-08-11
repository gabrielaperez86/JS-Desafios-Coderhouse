alert('bienvenido al simulador de presupuestos de servicios');
let dolarHoy = parseFloat(prompt("Ingrese el valor del dolar al día de la fecha: "));
let tipoCliente = prompt("por favor ingrese el tipo de cliente, siendo: 1= EMPRENDEDORES 2= MEDIANAS EMPRESAS 3= COMPANIAS");

class Servicio {
    constructor(id, nombre, cantidad, precioDls) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.cantidad = parseInt(cantidad);
        this.precioDls = parseFloat(precioDls);
    }
    calcularCostoServicio() {
        costoServicio = this.precioDls * dolarHoy;
    }
}
class TipoCliente {
    constructor(id, nombre, porcentaje, descripcion) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.porcentaje = parseFloat(porcentaje);
        this.descripcion = descripcion;
    }
    calcularPorcentajeCobro() {
        this.cannon = this.porcentaje * Servicio.costoServicio();
    }
}

const servicios = [];
servicios.push(new Servicio(1, "Diseño para Redes Sociales", 2, 12.4));
servicios.push(new Servicio(2, "Diseño Logo", 1, 60));
servicios.push(new Servicio(3, "Identidad Corporativa / Branding", 1, 120));
servicios.push(new Servicio(4, "Fotografia de Producto", 10, 4));
servicios.push(new Servicio(5, "Segmentacion", 1, 14));
servicios.push(new Servicio(6, "Web Landind", 1, 125));

for (const servicio of servicios) {
    servicio.calcularCostoServicio();
}

for (let i = 0; i < servicios.length; i++) {
    console.log(servicios[i]);
}


const tipoClientes = [];
tipoClientes.push(new TipoCliente(1, "Cliente A", 0.85, "emprendedores"));
tipoClientes.push(new TipoCliente(2, "Cliente B", 1, "medianas empresas"));
tipoClientes.push(new TipoCliente(3, "Cliente C", 2, "companias"));


if (tipoCliente == 1) {
    let cantidadServicios = parseInt(prompt("ingrese cantidad de servicios a presupuestar: "));
    console.log('entro a cliente 1');
    for (i = 0; i < cantidadServicios; i++) {
        serviciosAcontratar.push = prompt("por favor ingrese servicio a seleccionar, siendo: \n  1= DISEñO PARA REDES \n 2= DISEñO LOGO \n 3= IDENTIDAD CORPORATIVA \n 4= FOTOGRAFIA DE PRODUCTO \n 5= WEB LANDING");
        alert(serviciosAcontratar[i]);
    }
} else {
    if (tipoCliente == 2) {
        console.log('entro a cliente 2');
    } else {
        if (tipoCliente == 3) {
            console.log('entro a cliente 3');
        } else {
            console.log('cliente inexistente');
        }
    }
}





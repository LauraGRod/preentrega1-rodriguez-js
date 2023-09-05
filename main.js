alert("¡Bienvenido a Atelier!")

let prenda = '';
let cantidad = 0;
let talle = '';
let color = '';
let precio = 0;
let subtotal = 0;

const elegirPrenda = () => {

    let continuarCompra = false;

    do {
        prenda = prompt('¿Qué prenda le gustaría comprar: tapado, jean, sweater?').toUpperCase();

        switch (prenda) {
            case 'TAPADO':
              precio = 12000;
              break;
            case 'JEAN':
              precio = 8000;
              break;
            case 'SWEATER':
              precio = 6000;
              break;
            default:
              alert('Ingrese una prenda disponible');

          while (prenda !== 'TAPADO' && prenda !== 'JEAN' && prenda !== 'SWEATER') {
            prenda = prompt('Ingrese una prenda disponible: tapado, jean o sweater.').toUpperCase();
          }
        }

        console.log(prenda)
        
        talle = prompt('¿En qué talle: S, M o L?').toUpperCase();

        switch (talle) {
            case 'S':
              break;
            case 'M':
              break;
            case 'L':
              break;
            default:
              alert('Ingrese un talle disponible');
        
          while (talle !== 'S' && talle !== 'M' && talle !== 'L') {
            talle = prompt('Ingrese un talle disponible: S, M o L.').toUpperCase();
          }
        }
          
        console.log(talle)

        color = prompt('¿De qué color: blanco, azul o beige?').toUpperCase();

        switch (color) {
            case 'BLANCO':
              break;
            case 'AZUL':
              break;
            case 'BEIGE':
              break;
            default:
              alert('Ingrese un color disponible');
          
          while (color !== 'BLANCO' && color !== 'AZUL' && color !== 'BEIGE') {
            color = prompt('Ingrese un color disponible: blanco, azul o beige.').toUpperCase();
          }
        }

        console.log(color)
        
        cantidad = Number(prompt('¿Cuántos desea comprar?'));

        while (isNaN(cantidad)) {
          alert ('Ingrese un número correcto')
          cantidad = Number(prompt('¿Cuántos desea comprar?'));
        }

        subtotal += precio * cantidad;  
        console.log(subtotal)

        continuarCompra = confirm('¿Le gustaría agregar algo más a su compra?');
    
    } while (continuarCompra);

    return subtotal;
}

const aplicarDescuento = (subtotal) => {
    let metodoPago = '';
    metodoPago = prompt('Seleccione su método de pago: efectivo o tarjeta').toUpperCase();
    const descuento = 0.80;

    if (metodoPago === 'EFECTIVO') {
        return subtotal * descuento;
    } else if (metodoPago === 'TARJETA') { 
        return subtotal;
    } else {
        alert ('Seleccione un método de pago válido')
    }

    return metodoPago
}

const compraFinal = (precioFinal) => {
    alert ('El valor total de tu compra es: '+precioFinal+'. Tu pedido: '+cantidad+' '+prenda+' talle ' +talle+' de color '+color+', está en camino.')
}

subtotal = elegirPrenda();

const precioFinal = aplicarDescuento(subtotal);

compraFinal(precioFinal);


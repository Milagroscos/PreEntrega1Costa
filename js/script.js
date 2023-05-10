
alert( "Bienvenido/a Babys's Shop")
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")

let seleccionarProductos =Number(prompt("1-body $250, 2-pelele $200, 3-gorrito $150"))
let seleccionarCantidad;
let total= 0;

function cantidad (cant,precio){
return cant * precio}


while(seleccionarProductos != "0"){
    switch(seleccionarProductos){
        case 1:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Body, indique la cantidad"))
            total += cantidad(seleccionarCantidad,250)
            break;
        case 2:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Pelele, indique la cantidad"))
            total += cantidad(seleccionarCantidad,200)
            break; 
        case 3:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Gorrito, indique la cantidad"))
            total += cantidad(seleccionarCantidad,150)
            break;  

            default:
            break;
    }
    seleccionarProductos =Number(prompt("1-body $250, 2-pelele $200, 3-gorrito $150"))
}

alert("El total de la compra es de " + total +"$")

/*function envio()
    if (total >=1000){
    alert("El envio es gratuito")}

    else{
        total+= 1000
        alert("El costo de envio de de $150, y el total de su compra es : " + total)
    }
    envio()*/
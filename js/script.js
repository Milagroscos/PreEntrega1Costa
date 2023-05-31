/*alert( "Bienvenido/a Babys's Shop")
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

alert("El total de la compra es de " + total +"$")*/

/*function envio()
    if (total >=1000){
    alert("El envio es gratuito")}

    else{
        total+= 1000
        alert("El costo de envio de de $150, y el total de su compra es : " + total)
    }
    envio()*/
 
    const productos=[
        {nombre: "Conjunto paris", precio: 350},
        {nombre: "Enterito morgan", precio: 300},
        {nombre: "Buzo india", precio: 500},
        {nombre: "Tapado grecia", precio: 700},
    ]

    let carrito=[]

    let seleccion= prompt("Bienvenido/a, ¿desea agregar algun producto al carrito, si o no?")

    while( seleccion!= "si" && seleccion != "no"){
        alert( "Porfavor ingrese si o no.")
        seleccion= prompt(" Dese agregar algun producto al carrito, si o no?")
    }

    if (seleccion == "si"){
        alert(" A continuacion te mostramos nuestra lista de productos")
        let todosLosProductos= productos.map((producto)=> producto.nombre+ " " + producto.precio+ "$");
        alert(todosLosProductos.join( " - "))
    }
    else if (seleccion == "no"){
        alert("Gracias por venir, hasta pronto!")
    }

    while( seleccion != "no"){
        let producto= prompt("Agrega un producto a tu carrito")
        let precio = 0

        if(producto=="Conjunto paris" || producto == "Enterito morgan" || producto =="Buzo india" || producto== "Tapado grecia"){
            switch (producto) {
                case "Conjunto paris":
                    precio=350
                    break;
                case "Enterito morgan":
                    precio=300
                    break;
                case "Buzo india":
                    precio=500
                    break;
                case "Tapado grecia":
                    precio=700
                    break;
                default:
                    break;
            }
        let unidades = parseInt(prompt("¿Cuantas unidades desea agregar?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }
        else{
            alert("En este momento no contamos con stock de ese producto")
        }
        seleccion = prompt("¿Desea agregar algun otro producto?")
       
        while(seleccion == "no"){
         alert("Gracias por la compra.")
         carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades ${carritoFinal.unidades}, 
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)

        })
    break;
    }
}

const total= carrito.reduce((acc,el) => acc + el.precio * el.unidades,0)
console.log("El total a pagar es:" + total)
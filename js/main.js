//Preentrega-2

//mensaje de bienvenida
alert("Bienvenido a la mejor tienda de instrumentos musicales!! Aquí encontrarás: \n\nBaterías acústicas, Baterías eléctricas, platillos y Accesorios. \n\nTodos al mejor precio del mercado. \n\n ¡¡Tenemos interesantes DESCUENTOS para aquellos que elijan más de 3 productos, así que...!! \n\n!Ven y descubrelo!");

//Inicio sesion
let usuario;
do{
    usuario = prompt("Ingrese su nombre")

    if (!/^[a-zA-Z]+$/.test(usuario)) {
        alert("Por favor ingresa tu nombre");
    }
}while(!/^[a-zA-Z]+$/.test(usuario));


alert("Bienvenido/a "+ usuario + " a AmbiDrums la mejor tienda de instrumentos musicales!")

//crear un usuario para confirmar la compra
//let contrasenia = prompt("Ingresa una contraseña")


//opciones 
let opcion =prompt("Selecciona un producto: \n\n 1-Baterías acústicas \n 2-Baterías eléctricas \n 3-Platillos \n 4-Acessorios \n 5-Ver el total\n 6-Salir \n");

//declarar las variables inicializandolas en 0
let suma=0;
let sumaConComas =0;
let subtotal=0;
let subtotalConComas = 0;
let impuesto =0;
let impuestoConComas = 0;
let total =0;
let conteoDescuento = 0;
let descuento = 0;
let descuentoConComas = 0;
let descuentoFinal = 0;
let descuentoFinalConComas =0;
let opcionInstrumento = "";
const carrito = [];
const cantidadProductos = {};

//funciones

//funcion sumar una variable y una constante
function sumar(num1, num2) {
    return num1 + num2;
}

//funcion para instanciar objetos
function Instrumentos (marca, precio){
    this.marca = marca;
    this.precio = precio;
}

// funcion para recorrer los objetos del array e ir monstrandolos en pantalla
function Recorrer (object){
    
    for (const iterator of object) {
        alert("Marca: " + iterator.marca + ", Precio: " + iterator.precio);
    }
}

// Función para agregar un producto al carrito y actualizar su cantidad
function agregarProductoACarrito(producto) {
    if (cantidadProductos[producto.marca]) {
        cantidadProductos[producto.marca]++;
    } else {
        cantidadProductos[producto.marca] = 1;
        carrito.push(producto);
    }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
    } else {
        let mensaje = "Contenido del carrito:\n\n";
        carrito.forEach(function(item) {
            mensaje += "Cantidad: " + cantidadProductos[item.marca] + " Producto: " + item.marca + ", Precio: " + item.precio + "\n\n";
        });
        alert(mensaje);
    }
}



while (opcion != "6"){

    switch(opcion){
        
        case "1":
            let salirBateriaAcustica = false;
            while(!salirBateriaAcustica){
                opcion = parseFloat( prompt("Las baterías acústicas que tenemos son: \n\n 1-Yamaha RDP0F5 HOR Batería acústica Rydeen, Hot Red RD$37,252 \n\n 2-RDP2F5 PB Batería acústica Rydeen, Plateado brillante Bombo 22 RD$39,524.41 \n\n 3-Volver al menu \n\n"));
                    //baterias acusticas
                    
                    if (opcion == "1") {
                        alert ("Usted seleccionó el producto: Yamaha RDP0F5 HOR Batería acústica Rydeen, Hot Red RD$37,252");
                        //realizar la suma mediante funcion y poner los valores con la coma y dos decimales
                        suma = sumar (suma, 37252); 
                        sumaConComas = suma.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                        //Calcular el impuesto y poner los valores con la coma y dos decimales
                        impuesto = suma * 0.18;
                        impuestoConComas = impuesto.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                        //Calcular el subtotal sin impuestos  y poner los valores con la coma y dos decimales
                        subtotal= suma - impuesto;
                        subtotalConComas = subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                        //contador para al final ofrecer descuento al cliente que compre 3 productos
                        conteoDescuento = conteoDescuento + 1;
                        const bateriaAcustica1 = new Instrumentos ("Yamaha RDP0F5 HOR Batería acústica Rydeen, Hot Red", "RD$37,252")
                        agregarProductoACarrito(bateriaAcustica1);
                        mostrarCarrito()

                    } else if(opcion == "2"){
                        alert ("Usted seleccionó el producto: RDP2F5 PB Batería acústica Rydeen, Plateado brillante Bombo 22 RD$39,524.41");
                        suma = sumar (suma, 39524.41);
                        sumaConComas = suma.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                        impuesto = suma * 0.18;
                        impuestoConComas = impuesto.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                        subtotal= suma - impuesto;
                        subtotalConComas = subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                        conteoDescuento = conteoDescuento + 1;
                        const bateriaAcustica2 = new Instrumentos ("RDP2F5 PB Batería acústica Rydeen, Plateado brillante Bombo 22", "RD$39,524.41")
                        agregarProductoACarrito(bateriaAcustica2);
                        mostrarCarrito()
                        
                    }else if(opcion == "3"){
                        salirBateriaAcustica = true;
                    }
                }
        break;

        //baterias electricas
        case "2":
            let salirBateriaElectrica = false;
            while(!salirBateriaElectrica){
                opcion = parseFloat( prompt("Las baterias eléctricas que tenemos son: \n\n 1-Alesis nitro mesh Kit RD$68,550.00 \n\n 2-VAD103 Bateria electroacústica DESING KIT RD$203,522.86\n\n 3-Volver al menu \n\n"));
                
                if (opcion == "1") {
                    alert ("Usted seleccionó el producto: Alesis nitro mesh Kit RD$68,550.00");
                    suma = sumar (suma, 68550.00);
                    sumaConComas = suma.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    impuesto = suma * 0.18;
                    impuestoConComas = impuesto.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    subtotal= suma - impuesto;
                    subtotalConComas = subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    conteoDescuento = conteoDescuento + 1;
                    const bateriaElectrica1 = new Instrumentos ("Alesis nitro mesh Kit", "RD$68,550.00")
                    agregarProductoACarrito(bateriaElectrica1);
                    mostrarCarrito()

                } else if(opcion == "2"){
                    alert ("Usted seleccionó el producto: VAD103 Bateria electroacústica DESING KIT RD$203,522.86");
                    suma = sumar (suma, 203522.86);
                    sumaConComas = suma.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    impuesto = suma * 0.18;
                    impuestoConComas = impuesto.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    subtotal= suma - impuesto;
                    subtotalConComas = subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    conteoDescuento = conteoDescuento + 1;
                    const bateriaElectrica2 = new Instrumentos ("VAD103 Bateria electroacústica DESING KIT", "RD$203,522.86")
                    agregarProductoACarrito(bateriaElectrica2);
                    mostrarCarrito()
                }
                else if(opcion == "3"){
                    salirBateriaElectrica = true;
                }
            }
        break;
        
        //platillos
        case "3":
            let salirPlatillos = false;
            while(!salirPlatillos){
                opcion = parseFloat( prompt("Los platillos que tenemos son: \n\n 1-CC-141620+18 Set de platillos Custom Classic (5) RD$43,204.41 \n\n 2-CC4680-DB CL.CU. Double Bonus SET RD$63,230.30\n\n 3-Volver al menu \n\n"));
                
                if (opcion == "1") {
                    alert ("Usted seleccionó el producto: 1-CC-141620+18 Set de platillos Custom Classic (5) RD$43,204.41");
                    suma = sumar (suma, 43204.41);
                    sumaConComas = suma.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    impuesto = suma * 0.18;
                    impuestoConComas = impuesto.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    subtotal= suma - impuesto;
                    subtotalConComas = subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    conteoDescuento = conteoDescuento + 1;
                    const platillos1 = new Instrumentos ("1-CC-141620+18 Set de platillos Custom Classic (5)", "RD$43,204.41")
                    agregarProductoACarrito(platillos1);
                    mostrarCarrito()
                

                } else if(opcion == "2"){
                    alert ("Usted seleccionó el producto: CC4680-DB CL.CU. Double Bonus SET RD$63,230.30");
                    suma = sumar (suma, 63230.30);
                    sumaConComas = suma.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    impuesto = suma * 0.18;
                    impuestoConComas = impuesto.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    subtotal= suma - impuesto;
                    subtotalConComas = subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    conteoDescuento = conteoDescuento + 1;
                    const platillos2 = new Instrumentos ("CC4680-DB CL.CU. Double Bonus SET", "RD$63,230.30")
                    agregarProductoACarrito(platillos2);
                    mostrarCarrito()

                }
                else if (opcion == "3"){
                    salirPlatillos = true;
                }
            }
        break;
        
        //Accesorios
        case"4":
            let salirAccesorios = false;
            while(!salirAccesorios){
                opcion = parseFloat( prompt("Los accesorios que tenemos son: \n\n 1-TXR5AW Bolillos Forward 5A RAW RD$932.20 \n\n 2-TDSB Estuche Deluxe para bolillos color verde militar RD$3,455.04 \n\n 3-Volver al menu \n\n"));
                
                if (opcion == "1") {
                    alert ("Usted seleccionó el producto: TXR5AW Bolillos Forward 5A RAW RD$932.20");
                    suma = sumar (suma, 932.20);
                    sumaConComas = suma.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    impuesto = suma * 0.18;
                    impuestoConComas = impuesto.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    subtotal= suma - impuesto;
                    subtotalConComas = subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    conteoDescuento = conteoDescuento + 1;
                    const accesorios1 = new Instrumentos ("TXR5AW Bolillos Forward 5A RAW", "RD$932.20")
                    agregarProductoACarrito(accesorios1);
                    mostrarCarrito()
                    

                } else if(opcion == "2"){
                    alert ("Usted seleccionó el producto: TDSB Estuche Deluxe para bolillos color verde militar RD$3,455.04");
                    suma = sumar (suma, 3455.04);
                    sumaConComas = suma.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    impuesto = suma * 0.18;
                    impuestoConComas = impuesto.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    subtotal= suma - impuesto;
                    subtotalConComas = subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    conteoDescuento = conteoDescuento + 1;
                    const accesorios2 = new Instrumentos ("TDSB Estuche Deluxe para bolillos color verde militar", "RD$3,455.04")
                    agregarProductoACarrito(accesorios2);
                    mostrarCarrito()
                }
                else if(opcion == 3){
                    salirAccesorios = true;
                }

            }
        break;
        
        //Descuento
        case"5":
            
            if(conteoDescuento >= 3){
                
            alert("¡Usted seleccionó: "+conteoDescuento +" Productos!" +"\n\n ¡Aplica para un 10% de descuento!");
                //calcular el descuento y poner coma al valor y poner los valores con la coma y dos decimales
                descuento = (10 /100) * suma;
                descuentoConComas = descuento.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                //calcular el total con el descuento aplicado y poner los valores con la coma y dos decimales 
                descuentoFinal = suma - descuento;
                descuentoFinalConComas = descuentoFinal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                //mostrar todos los resultados
                mostrarCarrito();
                alert("Subtotal: RD$"+ subtotalConComas + "\nImpuestos: RD$"+impuestoConComas + "\nTotal con impuestos incl.: RD$"+ sumaConComas + "\nDescuento: RD$" +descuentoConComas + "\nTotal con impuestos y descuento incl.: RD$"+ descuentoFinalConComas);

            }else if(conteoDescuento < 3 && conteoDescuento != 0){
                //condicion para el que no aplica para el descuento
                alert("¡Usted seleccionó: "+conteoDescuento +" productos!" +"\n\n¡No aplica para un 10% de descuento!");
                mostrarCarrito();
                alert("Subtotal: RD$"+ subtotalConComas + "\nImpuestos: RD$"+impuestoConComas + "\nTotal con impuestos incl.: RD$"+ sumaConComas);
            }
            else if(conteoDescuento == 0){
                alert("Usted no ha seleccionado ningun producto");
            }
        break;
        
        default:
            alert("opción no válida. Por favor seleccione una opción válida");
        break;
        
    }
    //condicion de salida
    opcion =prompt("Selecciona un producto: \n\n 1-Baterías acústicas \n 2-Baterías eléctricas \n 3-Platillos \n 4-Acessorios \n 5-Ver el total\n 6-Salir \n");
}
//mensaje de despedida
alert("Gracias " + usuario + " por visitar nuestra tienda espero que vuelvas pronto!");



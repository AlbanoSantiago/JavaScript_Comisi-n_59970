function calcularFactura() {
    const iva = 16; 


    for (let continuar = "sí"; continuar === "sí" || continuar === "si"; continuar = prompt("¿Otra factura? (sí/no").toLowerCase()) {
        let nombre, calleNumeroExterior, numeroInterior, colonia, alcaldiaMunicipio, codigoPostal, entidadFederativa, pais, rfc, cantidad;
       

        while (true) {
            nombre = prompt("Ingresa Nombre o Razón Social del Cliente:");
            calleNumeroExterior = prompt("Ingresa Calle y número exterior del Domicilio del Cliente:");
            numeroInterior = prompt("Ingresa número Interior")
            colonia = prompt("Ingres Colonia");
            alcaldiaMunicipio = prompt("Ingresa Alcaldía o Municipio");
            codigoPostal = prompt("Ingresa Código Postal");
            entidadFederativa = prompt("Ingresa Entidad Federativa");
            pais = prompt("Ingresa País")
            rfc = prompt("Ingresa RFC del Cliente:");
            if (nombre && calleNumeroExterior && numeroInterior && colonia && alcaldiaMunicipio && codigoPostal && entidadFederativa && pais && rfc) break;
            alert("Todos los Campos son Obligatorios.");
        }

        while (true) {
            cantidad = parseInt(prompt("Cantidad a facturar:"));
            if (!isNaN(cantidad) && cantidad >= 0) break;
            alert("Cantidad inválida.");
        }

        let ivaCalculado = Math.floor((cantidad * iva) / 100);
        let total = cantidad + ivaCalculado;

        alert(
            "--- Factura ---\n" +
            "Nombre: " + nombre.toUpperCase() + "\n" +
            "Calle y Número Exterior: " + calleNumeroExterior.toUpperCase() + "\n" +
            "Número interior: " + numeroInterior.toUpperCase() + "\n" +
            "Colonia: " + colonia.toUpperCase() + "\n" +
            "Alcaldía o Municipio: " + alcaldiaMunicipio.toUpperCase() + "\n" +
            "Código Postal: " + codigoPostal.toUpperCase() + "\n" +
            "Entidad Federativa: " + entidadFederativa.toUpperCase() + "\n" +
            "País: " + pais.toUpperCase() + "\n" +
            "RFC: " + rfc.toUpperCase() + "\n" +
            "Cantidad: $" + cantidad + "\n" +
            "IVA (16%): $" + ivaCalculado + "\n" +
            "Total: $" + total
        );
         //! Esta parte la dejo aquí ya que al finalizar la captura de datos y emitir la alerta con todos los datos se pregunta si quiere hacer otra factura o no; éste bucle lo hice con For, pero tambien se puede llevar a cabo con do.... while.
        // do { 
        //     continuar = prompt("¿otra factura? (sí/no):").toLowerCase(); 
        //     if (continuar !== "sí" && continuar !== "si" && continuar !== "no") {
        //         alert("Solamente puedes escribir sí o no.");
        //     } 
        // } while (continuar !== "sí" && continuar !== "si" && continuar !== "no");
        
        if (continuar ==="no") {
            alert("Gracias por facturar con nuestro sistema");
            break;
        }
    }
}

    alert("Gracias por facturar con nuestro sitema.");

calcularFactura();

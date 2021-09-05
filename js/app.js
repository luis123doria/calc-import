
// Funcion Calcular
function calcular(){

	// Obtenemos los valores
	let precioVenta = document.getElementById('pv').value;
	let precioCompra = document.getElementById('pc').value;
	let unidades = document.getElementById('unit').value;
	let costoEnvio = document.getElementById('ce').value;
	let costoSeguro = document.getElementById('cs').value;
	let costoAduana = document.getElementById('ca').value;
	let otrosCostos = document.getElementById('oc').value;

	// Creamos los resultados

	// Costo Total (CT)

	// Operacion
	let costoTotal = parseFloat(precioCompra*unidades);
	let costosAdicionales = parseFloat(costoEnvio)+parseFloat(costoSeguro)+parseFloat(costoAduana)+parseFloat(otrosCostos);
	let costoTotalFinal = parseFloat(costoTotal) + parseFloat(costosAdicionales);

	// Crear los elementos y usar .appendChild
	let costoTotalParrafo = document.createElement('P');
	costoTotalParrafo.classList.add('clear');
	let costoTotalTextNode = document.createTextNode("$" + costoTotalFinal);
	costoTotalParrafo.appendChild(costoTotalTextNode);

	// Agregar al DOM
	let costoTotalDiv = document.getElementById('costoTotalDiv');
	costoTotalDiv.appendChild(costoTotalParrafo);



	// Costo por Unidad (CU)

	// Operacion
	let costoUnidad = parseFloat(costoTotalFinal) / parseFloat(unidades);

	// Crear los elementos y usar .appendChild
	let costoUnidadParrafo = document.createElement('P');
	costoUnidadParrafo.classList.add('clear');
	let costoUnidadTextNode = document.createTextNode("$" + costoUnidad.toFixed(2));
	costoUnidadParrafo.appendChild(costoUnidadTextNode);

	// Agregar al DOM
	let costoUnidadDiv = document.getElementById('costoUnidadDiv');
	costoUnidadDiv.appendChild(costoUnidadParrafo);



	// Ganancias por Unidad (GU)

	// Operacion
	let gananciasUnidad = parseFloat(costoUnidad) - parseFloat(precioCompra);

	// Crear los elementos y usar .appendChild
	let gananciasUnidadParrafo = document.createElement('P');
	gananciasUnidadParrafo.classList.add('clear');
	let gananciasUnidadTextNode = document.createTextNode("$" + gananciasUnidad.toFixed(2));
	gananciasUnidadParrafo.appendChild(gananciasUnidadTextNode);

	// Agregar al DOM
	let gananciasUnidadDiv = document.getElementById('gananciasUnidadDiv');
	gananciasUnidadDiv.appendChild(gananciasUnidadParrafo);



	// Ganancias por Unidad Precio Venta (GUPV)

	// Operacion
	let gananciasUnidadPrecioVenta = parseFloat(precioVenta) - parseFloat(costoUnidad);

	// Crear los elementos y usar .appendChild
	let gananciasUnidadPrecioVentaParrafo = document.createElement('P');
	gananciasUnidadPrecioVentaParrafo.classList.add('clear');
	let gananciasUnidadPrecioVentaTextNode = document.createTextNode("$" + gananciasUnidadPrecioVenta.toFixed(2));
	gananciasUnidadPrecioVentaParrafo.appendChild(gananciasUnidadPrecioVentaTextNode);

	// Agregar al DOM
	let gananciasUnidadPrecioVentaDiv = document.getElementById('gananciasUnidadPrecioVentaDiv');
	gananciasUnidadPrecioVentaDiv.appendChild(gananciasUnidadPrecioVentaParrafo);



	// Ganancias Totales (GT)

	// Operacion
	let gananciasTotales = parseFloat(gananciasUnidad) * parseFloat(unidades);

	// Crear los elementos y usar .appendChild 
	let gananciasTotalesParrafo = document.createElement('P');
	gananciasTotalesParrafo.classList.add('clear');
	let gananciasTotalesTextNode = document.createTextNode("$" + gananciasTotales.toFixed(2));
	gananciasTotalesParrafo.appendChild(gananciasTotalesTextNode);

	// Agregar al DOM
	let gananciasTotalesDiv = document.getElementById('gananciasTotalesDiv');
	gananciasTotalesDiv.appendChild(gananciasTotalesParrafo);



	// Ganancias Totales Precio Venta (GTPV)

	// Operacion
	let gananciasTotalesPrecioVenta = parseFloat(gananciasUnidadPrecioVenta) * parseFloat(unidades);

	// Crear los elementos y usar .appendChild 
	let gananciasTotalesPrecioVentaParrafo = document.createElement('P');
	gananciasTotalesPrecioVentaParrafo.classList.add('clear');
	let gananciasTotalesPrecioVentaTextNode = document.createTextNode("$" + gananciasTotalesPrecioVenta.toFixed(2));
	gananciasTotalesPrecioVentaParrafo.appendChild(gananciasTotalesPrecioVentaTextNode);

	// Agregar al DOM
	let gananciasTotalesPrecioVentaDiv = document.getElementById('gananciasTotalesPrecioVentaDiv');
	gananciasTotalesPrecioVentaDiv.appendChild(gananciasTotalesPrecioVentaParrafo);



	// Total de Ventas 

	// Operacion
	let totalVentas = parseFloat(gananciasTotalesPrecioVenta) + parseFloat(costoTotalFinal);

	// Crear los elementos y usar .appendChild
	let totalVentasParrafo = document.createElement('P');
	totalVentasParrafo.classList.add('clear');
	let totalVentasTextNode = document.createTextNode("$" + totalVentas.toFixed(2));
	totalVentasParrafo.appendChild(totalVentasTextNode);

	// Agregar al DOM
	let totalVentasDiv = document.getElementById('totalVentasDiv');
	totalVentasDiv.appendChild(totalVentasParrafo);



	// ROI 

	// Operacion
	let roi = parseFloat(parseFloat(totalVentas) - parseFloat(costoTotalFinal)) / parseFloat(costoTotalFinal) * parseFloat(100);

	// Crear los elementos y usar .appendChild 
	let roiParrafo = document.createElement('P');
	roiParrafo.classList.add('clear');
	let roiTextNode = document.createTextNode("%" + roi.toFixed(2));
	roiParrafo.appendChild(roiTextNode);

	// Agregar al DOM
	let roiDiv = document.getElementById('roiDiv');
	roiDiv.appendChild(roiParrafo);



	// Margen de Ganancia en Bruto (MGB)

	// Operacion
	let gananciaBruta = parseFloat(totalVentas) - parseFloat(costoTotalFinal);
	let margenGBruto = parseFloat(gananciaBruta) * parseFloat(100) / parseFloat(totalVentas);

	// Crear los elementos y usar .appendChild
	let margenGBrutoParrafo = document.createElement('P');
	margenGBrutoParrafo.classList.add('clear');
	let margenGBrutoTextNode = document.createTextNode("%" + margenGBruto.toFixed(2));
	margenGBrutoParrafo.appendChild(margenGBrutoTextNode);

	// Agregar al DOM
	let margenGBrutoDiv = document.getElementById('margenGBrutoDiv');
	margenGBrutoDiv.appendChild(margenGBrutoParrafo);
}

// Function Verificar 
function verificar(){

	let formInput = document.getElementsByTagName("input");

	// Obtenemos los valores
	let precioVenta = document.getElementById('pv');
	let precioCompra = document.getElementById('pc').value;
	let unidades = document.getElementById('unit').value;
	let costoEnvio = document.getElementById('ce').value;
	let costoSeguro = document.getElementById('cs').value;
	let costoAduana = document.getElementById('ca').value;
	let otrosCostos = document.getElementById('oc').value;


	console.log(precioVenta);

	/* Hacer un millon de verificaciones y listo, hay que ver tambien como se hace para aplicar el Reset*/

	if (precioVenta.value == '' || precioCompra.value == '' || unidades.value == '' || costoEnvio.value == '' || costoSeguro.value == '' || costoAduana.value == '' || otrosCostos.value == '') {	
		console.log("Error, faltan datos"); 	
	}
	else {
		console.log("Calculando");
		calcular();
	}
}



function limpiar(){

	console.log("Limpiando");

	// Obtenemos los valores
	let costoTotalRemove = document.getElementById('costoTotalDiv');
	let costoUnidadRemove = document.getElementById('costoUnidadDiv');
	let gananciasUnidadRemove = document.getElementById('gananciasUnidadDiv');
	let gananciasUnidadPrecioVentaRemove = document.getElementById('gananciasUnidadPrecioVentaDiv');
	let gananciasTotalesRemove = document.getElementById('gananciasTotalesDiv');
	let gananciasTotalesPrecioVentaRemove = document.getElementById('gananciasTotalesPrecioVentaDiv');
	let totalVentasRemove = document.getElementById('totalVentasDiv');
	let roiRemove = document.getElementById('roiDiv');
	let margenGBrutoRemove = document.getElementById('margenGBrutoDiv');
	
	let formInput = document.getElementsByTagName("input");
	console.log(formInput);

	let removed = document.getElementsByClassName("clear");

	let i = 0;

	while (i < 50) {
		removed[i].textContent = '';
		i++;

	}
	/*
	removed[0].textContent = ''; */
	console.log(removed);

}
const form3 = document.getElementById("form3")
const cedula = document.getElementById("cedula")
const name = document.getElementById("name")
const salario = document.getElementById("salario")
const diasLaborados = document.getElementById("diasLaborados")
const prestamos = document.getElementById("prestamos")
const ventasMes = document.getElementById("ventasMes")
const result3 = document.getElementById("result3")

form3.addEventListener("submit", (e) => {
    e.preventDefault();

    const salarioMinimoLegalVigente = 737717
    const valorAuxilioTransporte = 83140
    const porcentajeComisionVentas = 0.02


    const empleado = {
        cedula: Number(cedula.value),
        name: name.value,
        salario: Number(salario.value),
        diasLaborados: Number(diasLaborados.value),
        prestamos: Number(prestamos.value),
        ventasMes: Number(ventasMes.value)
    }


    if (empleado.diasLaborados < 1) {
        empleado.diasLaborados = 1
    } else if (empleado.diasLaborados > 30) {
        empleado.diasLaborados = 30
    }

    if (empleado.salario <= (2 * salarioMinimoLegalVigente)) {
        auxilioT = (valorAuxilioTransporte * empleado.diasLaborados) / 30
    } else {
        auxilioT = 0
    }

    const sueldoDevengado = (empleado.salario * empleado.diasLaborados) / 30
    const comisionVentas = empleado.ventasMes * porcentajeComisionVentas
    const totalDevengado = sueldoDevengado + comisionVentas
    const salarioNeto = totalDevengado - empleado.prestamos

    result3.innerHTML = `
    <h6>Cedula empleado: ${empleado.cedula}</h6>
    <h6>Nombre Empleado: ${empleado.name}</h6>
    <h6>Salario Básico: ${empleado.salario}</h6>
    <h6>Auxilio de Transporte: ${auxilioT}</h6>
    <h6>Comisión de Ventas: ${comisionVentas}</h6>
    <h6>Préstamos: ${empleado.prestamos}</h6>
    <h6>Salario Neto Por Recibir: ${salarioNeto}</h6>
    `
})

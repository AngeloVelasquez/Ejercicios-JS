const form2 = document.getElementById("form2")
const kilos = document.getElementById("kilos")
const result2 = document.getElementById("result2")

form2.addEventListener("submit", (e) => {
    e.preventDefault()

    const precioKilo = 4200

    if (kilos.value <= 2) {
        descuento = 0
        let costoTotal = (precioKilo * kilos.value) - descuento
        result2.innerHTML = `
        <h5>Resultado:</h5>
        <h5>La compra de ${kilos.value} kilos tiene un valor de $${precioKilo * kilos.value} pero tiene un descuento por valor de 
        $${descuento} por lo tanto, el valor a pagar es: $${costoTotal}</h5>`

    } else if (kilos.value <= 5) {
        descuento = kilos.value * (precioKilo * 0.10)
        let costoTotal = (precioKilo * kilos.value) - descuento
        result2.innerHTML = `
        <h5>Resultado:</h5>
        <h5>La compra de ${kilos.value} kilos tiene un valor de $${precioKilo * kilos.value} pero tiene un descuento por valor de 
        $${descuento} por lo tanto, el valor a pagar es: $${costoTotal}</h5>`

    } else if (kilos.value <= 10) {
        descuento = kilos.value * (precioKilo * 0.15)
        let costoTotal = (precioKilo * kilos.value) - descuento
        result2.innerHTML = `
        <h5>Resultado:</h5>
        <h5>La compra de ${kilos.value} kilos tiene un valor de $${precioKilo * kilos.value} pero tiene un descuento por valor de 
        $${descuento} por lo tanto, el valor a pagar es: $${costoTotal}</h5>`

    } else {
        descuento = kilos.value * (precioKilo * 0.20)
        let costoTotal = (precioKilo * kilos.value) - descuento
        result2.innerHTML = `
        <h5>Resultado:</h5>
        <h5>La compra de ${kilos.value} kilos tiene un valor de $${precioKilo * kilos.value} pero tiene un descuento por valor de 
        $${descuento} por lo tanto, el valor a pagar es: $${costoTotal}</h5>`
    }
})
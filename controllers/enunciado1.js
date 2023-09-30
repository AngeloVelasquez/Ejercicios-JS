const form1 = document.getElementById("form1")
const saldo = document.getElementById("saldoInicial")
const result = document.getElementById("result")

form1.addEventListener("submit", (e) => {
    e.preventDefault()

    const saldoInicial = saldo.value
    const interesMensual = 0.02
    const meses = 5 * 12
    const saldoFinal = saldoInicial * (1 + interesMensual) ** meses
    
    const saldoFinalShort = saldoFinal.toFixed(3)
    
    result.innerHTML = `
        <h5>Resultado:</h5>
        <h5>El valor consignado fue de: $${saldoInicial}</h5>
        <h5>En 5 años será: $${saldoFinalShort}</h5>
    `
})
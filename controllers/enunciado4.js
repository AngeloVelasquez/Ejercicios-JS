const num = document.getElementById("num")
const svg = document.getElementById("result4")
const form4 = document.getElementById("form4")

form4.addEventListener("submit", (e) => {
    e.preventDefault()

    svg.innerHTML = ""

    var num1 = 1;
    var num2 = 0;
    var num3 = 0;
    var num4 = 0;
    var contador = 0;

    do {
        num4 = num1 + num2 + num3;
        num3 = num4;
        num2 = num2 + 1;
        contador = contador + 1;
        var dato = `Dato #${contador} = ${num4}`
        svg.innerHTML += `<h6>${dato}</h6>`;
    } while (contador < num.value);
})


document.addEventListener("DOMContentLoaded", function () {
    let invitados = [];
    const form5 = document.getElementById("form5");
    const nombreInput = document.getElementById("nombre");
    const edadInput = document.getElementById("edad");
    const sexoInput = document.getElementById("sexo");
    const totalPersonasSpan = document.getElementById("totalPersonas");
    const totalHombresSpan = document.getElementById("totalHombres");
    const totalMujeresSpan = document.getElementById("totalMujeres");
    const promedioEdadHombresSpan = document.getElementById("promedioEdadHombres");
    const promedioEdadMujeresSpan = document.getElementById("promedioEdadMujeres");
    const edadMasJovenSpan = document.getElementById("edadMasJoven");
    const listaInvitados = document.getElementById("listaInvitados");

    form5.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = nombreInput.value;
        const edad = parseInt(edadInput.value);
        const sexo = sexoInput.value;

        if (edad < 18) {
            edadInput.classList.add("error");
            return;
        }

        invitados.push({ nombre, edad, sexo });

        nombreInput.value = "";
        edadInput.value = "";
        sexoInput.value = "hombre";

        actualizarResultados();
    });


    function actualizarResultados() {
        const totalPersonas = invitados.length;
        const hombres = invitados.filter(invitado => invitado.sexo === "hombre");
        const mujeres = invitados.filter(invitado => invitado.sexo === "mujer");
        const totalHombres = hombres.length;
        const totalMujeres = mujeres.length;

        const promedioEdadHombres = totalHombres > 0 ?
            hombres.reduce((sum, hombre) => sum + hombre.edad, 0) / totalHombres :
            0;

        const promedioEdadMujeres = totalMujeres > 0 ?
            mujeres.reduce((sum, mujer) => sum + mujer.edad, 0) / totalMujeres :
            0;

        const edadMasJoven = invitados.reduce((minEdad, invitado) => {
            return invitado.edad < minEdad ? invitado.edad : minEdad;
        }, Infinity);

        totalPersonasSpan.textContent = totalPersonas;
        totalHombresSpan.textContent = totalHombres;
        totalMujeresSpan.textContent = totalMujeres;
        promedioEdadHombresSpan.textContent = promedioEdadHombres.toFixed(2);
        promedioEdadMujeresSpan.textContent = promedioEdadMujeres.toFixed(2);
        edadMasJovenSpan.textContent = edadMasJoven;

        // Actualizar la lista de invitados
        listaInvitados.innerHTML = "";
        invitados.forEach(invitado => {
            const li = document.createElement("li");
            li.textContent = `${invitado.nombre} (Edad: ${invitado.edad}, Sexo: ${invitado.sexo})`;

            // Agregar una clase CSS a los elementos de la lista
            li.classList.add("list-group-item");
            li.classList.add("d-flex");
            li.classList.add("justify-content-between");
            li.classList.add("align-items-center");

            listaInvitados.appendChild(li);
        });
    }
});

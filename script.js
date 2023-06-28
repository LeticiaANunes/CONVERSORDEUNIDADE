// FUNÇÃO PARA CONVERTER METROS EM CENTÍMETROS
function converterMetrosParaCentimetros() {
    var m = parseFloat(document.getElementById("valor").value);
    var cm = m * 100;
    document.getElementById("resultado").textContent = cm + " cm";
}

// FUNÇÃO PARA ATUALIZAR AS UNIDADES DE MEDIDA
function atualizarUnidades() {
    var categoria = document.getElementById("categoria").value;
    var unidadeOrigemSelect = document.getElementById("unidadeOrigem");
    var unidadeDestinoSelect = document.getElementById("unidadeDestino");

    // Limpar as opções anteriores
    unidadeOrigemSelect.innerHTML = "";
    unidadeDestinoSelect.innerHTML = "";

    // Preencher as opções de acordo com a categoria selecionada
    if (categoria === "comprimento") {
        var unidadesComprimento = ["metros", "centimetros", "polegadas"];
        for (var i = 0; i < unidadesComprimento.length; i++) {
            var option = document.createElement("option");
            option.text = unidadesComprimento[i];
            option.value = unidadesComprimento[i];
            unidadeOrigemSelect.appendChild(option);
        }
        // Clonar as opções de origem para destino
        for (var j = 0; j < unidadesComprimento.length; j++) {
            var option = document.createElement("option");
            option.text = unidadesComprimento[j];
            option.value = unidadesComprimento[j];
            unidadeDestinoSelect.appendChild(option);
        }
    } else if (categoria === "peso") {
        var unidadesPeso = ["quilogramas", "gramas", "libras"];
        for (var k = 0; k < unidadesPeso.length; k++) {
            var option = document.createElement("option");
            option.text = unidadesPeso[k];
            option.value = unidadesPeso[k];
            unidadeOrigemSelect.appendChild(option);
        }
        // Clonar as opções de origem para destino
        for (var l = 0; l < unidadesPeso.length; l++) {
            var option = document.createElement("option");
            option.text = unidadesPeso[l];
            option.value = unidadesPeso[l];
            unidadeDestinoSelect.appendChild(option);
        }
    } else if (categoria === "temperatura") {
        var unidadesTemperatura = ["Celsius", "Fahrenheit", "Kelvin"];
        for (var m = 0; m < unidadesTemperatura.length; m++) {
            var option = document.createElement("option");
            option.text = unidadesTemperatura[m];
            option.value = unidadesTemperatura[m];
            unidadeOrigemSelect.appendChild(option);
        }
        // Clonar as opções de origem para destino
        for (var n = 0; n < unidadesTemperatura.length; n++) {
            var option = document.createElement("option");
            option.text = unidadesTemperatura[n];
            option.value = unidadesTemperatura[n];
            unidadeDestinoSelect.appendChild(option);
        }
    }
}

// Chamar a função para preencher as opções de unidade de origem e destino
atualizarUnidades();
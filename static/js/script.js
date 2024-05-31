function get_elenco() {
    fetch('/elenconazioni')
        .then(response => response.json())
        .then(data => {
            let elenco = '';
            for (let nazione of data) {
                elenco += '<a href="#" onclick="elenco_citta(\'' + nazione + '\')">' + nazione + '</a><br />';
            }
            document.getElementById('nazioni').innerHTML = elenco;
            document.getElementById('buttonNazioni').style.display = 'none';
            document.getElementById('buttonElimina').style.display = 'none';
        });
}

function elenco_citta(nazione) {
    fetch(`/elencoCitta/${nazione}`)
        .then(response => response.json())
        .then(data => {
            let elenco = '';
            for (let citta of data) {
                elenco += '<p><input type="radio" name="citta" value="' + citta['City'] + '" onclick="elenco_clienti(\'' + citta['City'] + '\')" />' + citta['City'] + ' (' + citta['Customers'] + ' clienti)</p>';
            }
            document.getElementById('citta').innerHTML = elenco;
        });
}

function elenco_clienti(citta) {
    fetch(`/elencoClienti?citta=${citta}`)
        .then(response => response.json())
        .then(data => {
            let elenco = '<ul>';
            for (let cliente of data) {
                elenco += '<li>' + JSON.stringify(cliente) + '</li>';
            }
            elenco += '</ul>';
            document.getElementById('clienti').innerHTML = elenco;
        });
}

function elimina() {
    fetch('/elimina_cliente')
        .then(response => response.json())
        .then(data => {
            let form;
            for (let nazione of data) {
                elenco += '<a href="#" onclick="elenco_citta(\'' + nazione + '\')">' + nazione + '</a><br />';
            }
            document.getElementById('elimina').innerHTML = form;
            document.getElementById('buttonNazioni').style.display = 'none';
            document.getElementById('buttonElimina').style.display = 'none';
        });
}
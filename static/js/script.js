function elenconazioni(){
    fetch('/elenconazioni')
    .then(response => response.json())
    .then(data => {
        let elenco;
        for (let nazione in data) {
            elenco += '<a href=/elencocitta/' + data['nazione'] + '>' + nazione + '</a><br />';
        }
        document.getElementById('nazioni').innerHTML = elenco;
    })
}
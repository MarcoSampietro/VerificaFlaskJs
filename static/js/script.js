function get_elenco(){
    fetch('/elencocitta')
    .then(response => response.json())
    .then(data => {
        let elenco = '';
        for (let nazione in data) {
            elenco += '<a href=/elencocitta/' + data['nazione'] + '>' + nazione + '</a><br />' + data['City'].value_counts().sort_values(ascending=False);
        }
        document.getElementById('nazioni').innerHTML = elenco;
    })
}
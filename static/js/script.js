function get_elenco(){
    fetch('/elenconazioni')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let elenco='';
        for (let nazione of data) {
            console.log(nazione);
            elenco += '<a href=/elencocitta/' +nazione+ '>' + nazione+ '</a><br />' ;
        }
        document.getElementById('nazioni').innerHTML = elenco;
    })
}

function get_citta(country){
    fetch(`/elencocitta/${country}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let elenco='';
        let cont=0
        for (let citta of data) {
            console.log(citta);
            elenco += '<p><input type="radio" name="citta" value="'+ citta +'" />'+ citta, cont +'</p>';
            cont += 1
        }
        document.getElementById('citta').innerHTML = elenco;
    })
}
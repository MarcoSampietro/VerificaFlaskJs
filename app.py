from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

dati_clienti = pd.read_csv('/workspace/VerificaFlaskJs/data/dati_clienti.csv')

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/elenconazioni')
def elenco():
    naz=dati_clienti['Country']
    return jsonify(naz.to_list())

@app.route('/elencocitta/<nazione>', methods=['GET'])
def citta(nazione):
    info = dati_clienti[dati_clienti['Country'] == nazione]
    city_counts = info.groupby('City').count().reset_index(names=['Customers']).sort_values(by='Customers', ascending=False).to_dict('records')
    print(city_counts)
    return jsonify(city_counts)

@app.route('/elencoclienti', methods=['GET'])
def clienti():
    citta = request.args.get('citta')
    info = dati_clienti[dati_clienti['City'] == citta]
    return jsonify()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=32457, debug=True)
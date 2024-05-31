from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

dati_clienti = pd.read_csv('data/dati_clienti.csv')

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/elenconazioni')
def elenco():
    naz = dati_clienti['Country'].drop_duplicates().sort_values()
    return jsonify(naz.to_list())

@app.route('/elencoCitta/<nazione>', methods=['GET'])
def elenco_citta(nazione):
    info = dati_clienti[dati_clienti['Country'] == nazione]
    city_counts = info.groupby('City').size().reset_index(name='Customers').sort_values(by='Customers', ascending=False).to_dict('records')
    return jsonify(city_counts)

@app.route('/elencoClienti', methods=['GET'])
def clienti():
    citta = request.args.get('citta')
    info = dati_clienti[dati_clienti['City'] == citta].to_dict('records')
    return jsonify(info)

@app.route('/elimina_cliente', methods=['GET', 'POST'])
def elimina_cliente():
    id = request.args.get('id')
    dati_clienti.drop(dati_clienti['CustomerID'] = id, inplace = True)

    return jsonify()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=32457, debug=True)
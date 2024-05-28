from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

dati_clienti = pd.read_csv('/workspace/VerificaFlaskbase/data/dati_clienti.csv')

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/elencocitta/<nazione>', methods=['GET'])
def citta(nazione):
    return jsonify(get_elenco)

@app.route('/elencoclienti', methods=['GET'])
def clienti():
    citta = request.args.get('citta')
    info = dati_clienti[dati_clienti['City'] == citta]
    return jsonify()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=32457, debug=True)
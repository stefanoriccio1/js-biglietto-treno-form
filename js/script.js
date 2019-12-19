
var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener ('click',
function() {
  // Calcolo prezzo del treno:
  // Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
  // var numeroKm = parseInt(prompt('Quanti Km devi percorrere?'));
  // console.log (numeroKm);
  //  // e l’età del passeggero.
  //
  // var anni = parseInt(prompt('Quanti anni hai?')) ;
  // console.log (anni);
  //
  // // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
  //
  // // Il prezzo del biglietto è definito in base ai km (0.21 € al km)

  // // ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

  //
  // // stampa su foglio html
  // // km
  // document.getElementById('km').innerHTML = numeroKm;
  // // età
  // document.getElementById('età').innerHTML = anni;

  // ESERCIZIO ODIERNO
  var inputKm = document.getElementById('km');
  var kmDaPercorrere = parseInt(inputKm.value);
  console.log(kmDaPercorrere);

  var inputNome = document.getElementById('nome');
  var nomeUtente = inputNome.value;
  console.log(nomeUtente);

  var etaSelect = document.getElementById('eta');
  var fascia = etaSelect.value;
  console.log(fascia);

  var euroKm = 0.21;
  var prezzoKm = (kmDaPercorrere * euroKm).toFixed(2);

  var offerta = 'Tariffa Standard';

  var carrozza = Math.floor(Math.random() * 10);
  var codice = Math.floor(Math.random() * 99999) + 90000;

  if (fascia == 'Over 65') {
    document.getElementById('prezzo_biglietto').innerHTML = (prezzoKm - ((prezzoKm * 40) / 100)).toFixed(2) + "€";
    offerta = 'Sconto Silver';
  }
  else if (fascia == 'Minorenne'){
    document.getElementById('prezzo_biglietto').innerHTML = (prezzoKm - ((prezzoKm *20) / 100)).toFixed(2) + "€";
    offerta = 'Sconto Minorenne';
  }
  else {
    document.getElementById('prezzo_biglietto').innerHTML = (prezzoKm) + "€";
  }

  var nomePasseggero = document.getElementById('nome').innerHTML = nomeUtente;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice_cp').innerHTML = codice;
}
)

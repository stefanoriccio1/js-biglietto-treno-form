
var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener ('click',
  function() {

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
    var carrozza = Math.floor(Math.random() * 10) +1;
    var codice = Math.floor(Math.random() * (99999 - 90000 + 1) ) + 90000;

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

    document. getElementById('nome_passeggero').innerHTML = nomeUtente
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice_cp').innerHTML = codice;
  }
)

  var buttonAnnulla = document.getElementById('annulla');
  buttonAnnulla.addEventListener('click',
    function () {
      document. getElementById('nome_passeggero').innerHTML = '';
      document.getElementById('offerta').innerHTML = '';
      document.getElementById('carrozza').innerHTML = '';
      document.getElementById('codice_cp').innerHTML = '';

      document.getElementById('nome').value= '';
      document.getElementById('km').value= '';
      document.getElementById('fascia').value= '';
    }
  )

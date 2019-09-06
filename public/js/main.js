"use strict"

function onAuth() {
    $('#feedback').html('För att hämta ditt CV från Arbetsförmedlingen måste du logga in.');
    $('#feedback').show();
}

function onFetch() {
    $('#feedback').html('Hämtar CV från Arbetsförmedlingen...');
    $('#feedback').show();
}

function onResponse(data) {
    $('#feedback').hide();
    $('#result').html(JSON.stringify(data, null, 2));
    $('#resultPane').show();
    $('#consentControl').show();
}

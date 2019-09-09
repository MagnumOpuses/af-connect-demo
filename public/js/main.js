"use strict"

function createAccordionCard(id, label, body) {
    let card = $('<div class="card"></div>');
    let cardId = 'card_' + id;
    let cardHeaderId = cardId + '_header';
    let cardContentId = cardId + '_content';
    
    let cardHeader = $('<div class="card-header"></div>')
        .attr('id', cardHeaderId);
    card.append(cardHeader);

    let cardButton = $('<button class="btn btn-link" type="button" data-toggle="collapse"></button>')
        .attr('data-target', '#' + cardContentId)
        .html(label);
    cardHeader.append(cardButton);

    let cardContent = $('<div class="collapse" data-parent="#cvAccordion"></div>')
        .attr('id', cardContentId)
        .append(body);
    card.append(cardContent);

    return card;
}

function onAuth() {
    $('#feedback').html('För att hämta ditt CV från Arbetsförmedlingen måste du logga in.');
    $('#feedback').show();
}

function onFetch() {
    $('#feedback').html('Hämtar CV från Arbetsförmedlingen...');
    $('#feedback').show();
}

function onResponse(data) {

    let cv = data;

    fetch('/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cv)
    }).then(response => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

        return response.text();
    })
    .then(form => {
        $('#cvAccordion').append(form);
    })
    .catch(err => console.log('Fetch Error :-S', err));

    let person = cv['person'];
    let communication = cv['communication'];

    let accordion = $('#cvAccordion').css('text-align', 'left');

    console.log(cv);

    $('#feedback').hide();
    $('#resultPane').show();
    $('#consentControl').show();
}

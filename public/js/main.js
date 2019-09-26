"use strict"

function onResponse(cv) {
    console.log(cv);

    fetch('/cvForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cv)
    }).then(response => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status code: ' + response.status);
            return;
        }

        return response.text();
    }).then(form => {
        $('#cv-data-holder')
            .empty()
            .append(form);
    }).catch(err => console.log('Fetch error:', err));
}

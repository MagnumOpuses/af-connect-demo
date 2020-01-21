"use strict";

function onResponse(envelope, err) {
  if (err !== undefined) {
    alert("AF-Connect Module error code [" + err.code + "]: " + err.message);
    return;
  }

  console.log(envelope);

  // Get the data(CV) from the envelope
  let cv = envelope.data.data;

  fetch("/cvForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cv)
  })
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status code: " + response.status
        );
        return;
      }

      return response.text();
    })
    .then(form => {
      $("#cv-data-holder")
        .empty()
        .append(form);

      $("#feedback-text").html("Vi har hämtat ditt CV från Arbetsförmedlingen");
      $("#create-cv-button").val("Förhandsgranska");
      $("#af-connect-button input").val("Skicka ansökan");
    })
    .catch(err => console.log("Fetch error:", err));
}

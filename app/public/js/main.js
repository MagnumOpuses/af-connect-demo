"use strict";

function onResponse(envelope, err) {
  if (err !== undefined) {
    alert("AF-Connect Module error code [" + err.code + "]: " + err.message);
    return;
  }

  const parsedEnvelope = JSON.parse(envelope.value);
  console.log("Envelope: ", parsedEnvelope);
  let cv = parsedEnvelope.data[0];

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

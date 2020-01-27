"use strict";

function onResponse(envelope, err) {
  if (err !== undefined) {
    alert("AF-Connect Module error code [" + err.code + "]: " + err.message);
    return;
  }

  console.log(envelope);

  // Get the data(CV) from the envelope
  let cv = envelope.data.data;

  // Adjust the legalId format from YYYY-MM-DD-xxxx to YYMMDD-xxxx
  // If the legalId does not match the expected format, no conversion
  // will take place and the original value will remain unchanged.
  try {
    const legalIdRegex = /^\d{4}-\d{2}-\d{2}-\d{4}$/;
    const match = cv.person.legalId.valueId.match(legalIdRegex);
    const firstPart = match[0]
      .split("-", 3)
      .join("")
      .substring(2);
    const secondPart = match[0].split("-").pop();
    cv.person.legalId.valueId = `${firstPart}-${secondPart}`;
  } catch (err) {
    console.warn(
      "Could not convert legalId format from YYYY-MM-DD-xxxx to YYMMDD-xxxx"
    );
  }

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

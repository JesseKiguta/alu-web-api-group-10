document.addEventListener("DOMContentLoaded", function () {
  const randomImageURL = getRandomImage();
  document.body.style.backgroundImage = `url(${randomImageURL})`;
});

document.addEventListener("DOMContentLoaded", function () {
  const randomImageURL = getRandomImage();
  document.body.style.backgroundImage = `url(${randomImageURL})`;
});
document.addEventListener("DOMContentLoaded", loadAPIs);

function loadAPIs() {
  button2function();
  joke();
  convert();
}

function button2function() {
  document.getElementById("buttonGetJoke").onclick = joke;
  document.getElementById("buttonCurrency").onclick = convert;
}

async function joke() {
  await fetch(
    "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9220814e8bmshc6822d31636dc7bp1cf24ajsn7206fa4eb740",
        "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("Chuck Norris API object:");
      console.log(response);
      console.log("\n");
      document.getElementById("joke").innerText = response.value;
      document.getElementsByClassName("jokeTitle")[0].href = response.url;
    })

    .catch((error) => {
      console.log(error);
    });
}

async function convert() {
  const from = document.getElementById("inputCurrencyFrom").value;
  const to = document.getElementById("inputCurrencyTo").value;
  await fetch(
    "https://currency-exchange.p.rapidapi.com/exchange?from=" +
      from +
      "&to=" +
      to +
      "&q=1.0",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9220814e8bmshc6822d31636dc7bp1cf24ajsn7206fa4eb740",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("Currency Exchange API object:");
      console.log(response);
      console.log("\n");
      document.getElementById("currencyResult").innerHTML =
        "Result: " + response;
    })

    .catch((error) => {
      console.error(error);
    });
}

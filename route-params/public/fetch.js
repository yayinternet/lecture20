function onTextReady(text) {
  console.log(text);
}

function onResponse(response) {
  return response.text();
}

fetch('/hello/Victoria')
  .then(onResponse)
  .then(onTextReady);

fetch('/flights/SFO-JFK')
  .then(onResponse)
  .then(onTextReady);

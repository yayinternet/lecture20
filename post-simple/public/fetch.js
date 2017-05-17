function onTextReady(text) {
  console.log(text);
}

function onResponse(response) {
  return response.text();
}

fetch('/hello', { method: 'POST'} )
  .then(onResponse)
  .then(onTextReady);

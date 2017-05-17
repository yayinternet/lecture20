function onTextReady(text) {
  console.log(text);
}

function onResponse(response) {
  return response.text();
}

fetch('http://localhost:3000')
  .then(onResponse)
  .then(onTextReady);


function makeFetch(network) {
  var url = 'http://newsapi.org/v2/top-headlines?sources=' + network + '&apiKey=926ea2a6d4474d838091fd2e96217ef0';
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      var articles = json.articles;
      console.log(articles);
    })
}
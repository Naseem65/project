//Fetch function//
function makeFetch(network) {
  var url = 'http://newsapi.org/v2/top-headlines?sources=' + network + '&apiKey=926ea2a6d4474d838091fd2e96217ef0';
  var req = new Request(url);
  return fetch(req)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      var articles = json.articles;
      console.log(articles);
      window.open(articles[0].url)
    })
}
document.addEventListener("DOMContentLoaded", function(event) {

  const http = new XMLHttpRequest();
  const url='https://linkshells.herokuapp.com/';
  http.open("GET", url)

  function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

  httpGet("https://toque-app.herokuapp.com")
})

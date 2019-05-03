document.addEventListener("DOMContentLoaded", function(event) {
  const websitesToWake = [
    "https://helpinghand-app.herokuapp.com",
    "https://toque-app.herokuapp.com",
    "https://linkshells.herokuapp.com",
    "https://helpinghandapi.herokuapp.com",
    "https://toqueapi.herokuapp.com/api/v1/users"
  ]


  function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true); // false for synchronous request
    xmlHttp.send()
    }

    websitesToWake.forEach( theUrl => {
      httpGet(theUrl)
    })

})

console.log(axios);
var xhttp = new XMLHttpRequest();

function addAba(element, newPage) {
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("element").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", newPage, true);
      xhttp.send();

    axios.get(newPage)
        .then(function (html) {
            $(element).fadeOut(function(){
                $(selector).html(html);
                $(selector).fadeIn();
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
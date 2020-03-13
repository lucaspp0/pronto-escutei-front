console.log(axios);
var xhttp = new XMLHttpRequest();

function addAba(element, newPage) {
    
    axios.get(newPage)
        .then(function (html) {
            $(element).fadeOut(function(){
                console.log(html);
                $(element).html(html);
                $(element).fadeIn();
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

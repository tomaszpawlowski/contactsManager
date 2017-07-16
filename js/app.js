$(document).ready(function(){
    console.log("hello jQuery");
    var localJsonServerURL = "http://localhost:3000/db";

    function loadAPI(){
        $.ajax({
        url: localJsonServerURL, 
        dataType: "json"
        }).done(function(response){
        console.log(response);
        }).fail(function(error){
        console.log(error);
        })
  }
  loadAPI();

});

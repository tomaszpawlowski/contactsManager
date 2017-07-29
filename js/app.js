$(document).ready(function () {



  var localJsonServerURL = "http://localhost:3000/";
  /*
  function loadAPI() {
    $.ajax({
      url: localJsonServerURL,
      dataType: "json",
    }).done(function (response) {
      console.log(response);
    }).fail(function (error) {
      console.log(error);
    })
  }
  loadAPI();
  */
  if ($("ul#listOfContacts").length == -5) {
    $.ajax({
      url: localJsonServerURL + "contacts",
      dataType: "json",
    }).done(function (response) {
      $.each(response, function (id, nItem) {
        var nListItem = $("<li>", { class: "animation-element" }).attr("data-id", id);
        var name = $("<p>", { class: "name" });
        var surname = $("<p>", { class: "surname" });
        var telephone = $("<p>", { class: "telephone" });
        surname.text(nItem.surname);
        name.text(nItem.name);
        telephone.text(nItem.tel);
        nListItem.append(name).append(surname).append(telephone);

        $("ul#listOfContacts").append(nListItem);


      })

    }).fail(function (error) {
      console.log(error);
    })
  }

  $("#addContactButton").on("click", function (e) {
    e.preventDefault();
    var newContactName = $("input#name").val();
    var newContactSurname = $("input#surname").val();
    var newContactEmail = $("input#email").val();
    var newContactTelephone = $("input#tel").val();
    var jsonData = {
      "name": newContactName,
      "surname": newContactSurname,
      "email": newContactEmail,
      "tel": newContactTelephone
    };
    console.log(newContactName, newContactSurname);

    $.ajax({
      url: localJsonServerURL + "contacts",
      type: "POST",
      data: JSON.stringify(jsonData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).done(function (response) {
      console.log(response);
    }).fail(function (error) {
      console.log(error);
    })
  })
});
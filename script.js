// Material Select Initialization
// $(document).ready(function () {
//   $('.mdb-select').materialSelect();
// });




  // $("#linkMain").click(function() {
  //   $.get("main.html", function(data) {
  //     $(".content").html(data)
  //   })
  // });
  $(document).ready(function () {

   
    $("#linkMain").click(function () {
      // Loading the content of main.html into to .content class
      $(".content").load("main.html");
    });
  
    $("#linkMain").ready(function () {
    // Loading the content of main.html into to .content class
    $(".content").load("main.html");
  });

  $("#linkAbout").click(function () {
    // Loading the content of about.html into to .content class
    $(".content").load("about.html");
    $("div.domjumbo").html();
  });

  $("#linkContact").click(function () {
    // Loading the content of contact.html into to .content class
    $(".content").load("contact.html");
  });

});


// Code goes here

// $(document).ready(function() {
  
//   $("#btnAbout").click(function() {
//     $.get("about.html", function(data) {
//       $(".content").html(data)
//     })
//   });

//   $("#btnContact").click(function() {
//     // Loading the content of contact.html into to .content class
//     $(".content").load("contact.html");    
//   });

  
// });
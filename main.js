// //PREUZIMANJE INFO I AUTOMATSKO PREBACIVANJE U OBJEKTE I ISPISIVANJE U DOM-u

// $.ajax({
//     url: 'https://mysafeinfo.com/api/data?list=bestnovels7&format=json&abbreviate=false&case=default',
//     type: "get",
//     dataType: "JSON"
//   })
//   .done(function (res) {
//     res.forEach(function (e) {
//       $('body').append(e.Title + "<br>")
//     })
//   })
//   .fail(function () {
//     console.log("greška")
//   })
//   .always(function () {
//     console.log("always");
//   })
$("#l1").on("click", function(e) {
  $("li>a")[0].className = "nav-link active";
  $("li>a")[1].className = "nav-link";
  $("li>a")[2].className = "nav-link";
  $("li>a")[3].className = "nav-link";
  $(".content").load("data.html #js");
});
$("#l2").on("click", function(e) {
  $("li>a")[0].className = "nav-link";
  $("li>a")[1].className = "nav-link active";
  $("li>a")[2].className = "nav-link";
  $("li>a")[3].className = "nav-link";
  $(".content").load("data.html #php");
});
$("#l3").on("click", function(e) {
  $(".content").load("data.html #java");
  $("li>a")[0].className = "nav-link";
  $("li>a")[1].className = "nav-link";
  $("li>a")[2].className = "nav-link active";
  $("li>a")[3].className = "nav-link";
});
$("#l4").on("click", function(e) {
  $(".content").load("data.html #wp");
  $("li>a")[0].className = "nav-link";
  $("li>a")[1].className = "nav-link";
  $("li>a")[2].className = "nav-link";
  $("li>a")[3].className = "nav-link active";
});

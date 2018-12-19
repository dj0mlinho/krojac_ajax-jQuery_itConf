$.ajax({
    url: 'https://mysafeinfo.com/api/data?list=bestnovels7&format=json&abbreviate=false&case=default',
    type: "get",
    dataType: "JSON"
  })
  .done(function (res) {
    res.forEach(function (e) {
      $('body').append(e.Title + "<br>")
    })
  })
  .fail(function () {
    console.log("greška")
  })
  .always(function () {
    console.log("always");
  })
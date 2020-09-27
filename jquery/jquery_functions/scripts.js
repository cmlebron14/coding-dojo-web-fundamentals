$("#append-button").click(function () {
  var appendValue = $("#append-input").val();
  $(".output").append("<p>" + appendValue + "</p");
});

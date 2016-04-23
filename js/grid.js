var html = "<div class='grid-box'></div>";

$(document).ready(function() {
  for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
      $(".grid-container").append(html);
    }
  }
});

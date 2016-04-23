var html = "<div class='grid-box'></div>";
var gridSize = 16;

$(document).ready(function() {
  spawnGrid(gridSize);

  $("#clear").click(function() {
    $(".grid-container").children(".grid-box").each(function() {
      $(this).removeClass("fill");
    });

    gridSize = parseInt(prompt("Enter the desired size for the new grid between 0 and 64.", gridSize.toString()));
    spawnGrid(gridSize);
  });

  $("#new").click(function() {

  });

  function spawnGrid(size) {
    if (size < 0) {
      size = 16;
    }

    $(".grid-container").empty();

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        $(".grid-container").append(html);
      }
    }

    $(".grid-box").css("width", 960/size);
    $(".grid-box").css("height", 960/size);

    $(".grid-box").hover(function() {
      $(this).addClass("fill");
    });
  }

});

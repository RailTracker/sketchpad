var html = "<div class='grid-box'></div>";
var gridSize = 16;
var random = false;

$(document).ready(function() {
  // Start off with default 16x16 grid and black fill-in
  spawnGrid(gridSize, random);

  // Clear button
  $("#clear").click(function() {
    gridSize = parseInt(prompt("Enter the desired size for the new grid between 0 and 100.", gridSize.toString()));
    spawnGrid(gridSize, random);
  });

  // Random button
  $("#random").click(function() {
    random = true;
    gridSize = parseInt(prompt("Enter the desired size for the new grid between 0 and 100.", gridSize.toString()));
    spawnGrid(gridSize, random);
  });

  // This creates the grid based on size and if random colors is chosen.
  function spawnGrid(size, random) {
    if (size < 0) {
      size = 0;
    }
    else if (size > 100) {
      size = 100;
    }

    var gridContainer = $(".grid-container");

    gridContainer.empty();

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        gridContainer.append(html);
      }
    }

    $(".grid-box").css("width", 960/size);
    $(".grid-box").css("height", 960/size);

    if (random) {
      $(".grid-box").hover(function() {
        $(this).css("background-color", '#'+Math.floor(Math.random()*16777215).toString(16));
      });
    } else {
      $(".grid-box").hover(function() {
        $(this).addClass("fill");
      });
    }
  }

});

let turtleCount = 8;
const turtle = '<img class="turtle" src="./turtle.jpg" alt="Image of a turtle" />';

$(".turtle").on("click", function () {
  $(this).remove();
  turtleCount--;
});

$(".restore .btn").on("click", function () {
  while (turtleCount < 8) {
    $(".turtles").append(turtle);
    turtleCount++;
  }
});

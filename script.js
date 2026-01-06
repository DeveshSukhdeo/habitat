$(".toggle_mission").click(function () {
  $(".mission_image").toggle();
});

$(".hide_mission").click(function () {
  $(".mission_text").fadeOut(1500);
});

$(".mission_image").click(function () {
  $(".mission_text").fadeIn(1500);
});

$("#hear_story").click(function () {
  $(".story_text").fadeIn(2000);
  $("#hear_story").fadeOut(1000);
});

$("footer a").click(function () {
  $(this).fadeOut(500).fadeIn(500);
});

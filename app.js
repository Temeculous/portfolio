$(window).on("load", function () {

  const openNav = function () {
    $("#nav").css("width", "250px");
    $("#main").css("marginLeft", "250px");
  };

  const closeNav = function () {
    $("#nav").css("width", "0");
    $("#main").css("marginLeft", "0");
  };

  $(".closebtn").on("click", closeNav);
  $(".openbtn").on("click", openNav);
});

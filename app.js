$(window).on("load", function () {
  const openNav = function () {
    $("#nav").css("width", "250px");
    $("#main").css("marginLeft", "250px");
  };

  const closeNav = function () {
    $("#nav").css("width", "0");
    $("#main").css("marginLeft", "0");
  };

  const tmodal = $(".title-modal");
  const modalOpen = $("#modal-btn");
  const modalClose = $(".close");

  modalOpen.on("click", function () {
    tmodal.css("display", "block");
  });
  modalClose.on("click", function () {
    tmodal.css("display", "none");
  });

  $(window).on("click", function (e) {
    if (e.target == tmodal) {
      tmodal.css("display", "none");
    }
  });
  $(".closebtn").on("click", closeNav);
  $(".openbtn").on("click", openNav);
}); 
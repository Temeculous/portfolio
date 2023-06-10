$(window).on("load", function () {
  const openNav = function () {
    $("#nav").css("width", "250px");
    $("#main").css("marginLeft", "250px");
  };

  const closeNav = function () {
    $("#nav").css("width", "0");
    $("#main").css("marginLeft", "0");
  };

  const project1 = $("#project1");
  const project1Body = function () {
    $(".project-description-body")
      .css("display", "none")
      .fadeIn("slow")
      .text("This is project 1's description!");
  };

  const project2 = $("#project2");
  const project2Body = function () {
    $(".project-description-body")
      .css("display", "none")
      .fadeIn("slow")
      .text("This is project 2's description!");
  };

  const project3 = $("#project3");
  const project3Body = function () {
    $(".project-description-body")
      .css("display", "none")
      .fadeIn("slow")
      .text("This is project 3's description!");
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

  project1.on("click", project1Body);
  project2.on("click", project2Body);
  project3.on("click", project3Body);

  $(window).on("click", function (e) {
    if (e.target == tmodal) {
      tmodal.css("display", "none");
    }
  });
  $(".closebtn").on("click", closeNav);
  $(".openbtn").on("click", openNav);
});

$(document).ready(function() {
  $("#closenav").hide();
  $(".viewpopup").hide();

  var closenav = $("#closenav"),
    navbtn = $("#navbtn"),
    navigation = $(".fullnavigation"),
    navigationbtns = $(".fullnavigation ul li a");
  (imgdisplay = $(".imgdisplay")),
    (contentbox = $(".contentbox")),
    navbtn.click(function() {
      navigation.animate({ right: "0px" }, 1000, "easeOutBack");
      navbtn.fadeOut("500");
      closenav.delay(1000).fadeIn("100");
    });

  closenav.click(function() {
    navigation.animate({ right: "-200px" }, 1000);
    navbtn.delay(1000).fadeIn("200");
    closenav.fadeOut("800");
  });

  navigationbtns.click(function() {
    navigation.animate({ right: "-200px" }, 1000);
    navbtn.delay(1000).fadeIn("200");
    closenav.fadeOut("800");
  });

  contentbox.mouseenter(function() {
    $(this)
      .children()
      .first()
      .next()
      .find("p")
      .removeClass("animated fadeOutDown");
    $(this)
      .children()
      .first()
      .next()
      .find("p")
      .addClass("animated fadeInDown");
  });

  contentbox.mouseleave(function() {
    $(this)
      .children()
      .first()
      .next()
      .find("p")
      .removeClass("animated fadeInDown");
    $(this)
      .children()
      .first()
      .next()
      .find("p")
      .addClass("animated fadeOutDown");
  });
});

$(function() {
  // Added code
  // Register keypress events for the current page
  $(document).keypress(function(e) {
    switch (e.keyCode) {
      // User pressed "up" arrow
      case 38:
        return scroll("prev");
        break;
      // User pressed "down" arrow
      case 40:
        return scroll("next");
        break;
    }
  });
});

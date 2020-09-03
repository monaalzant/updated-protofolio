
/*$(function () {
    "use strict";
    $(window).scroll(function () {
      var scrolling = $(window).scrollTop(),
        workOffset = $("#sec_box").offset().top;
      if (scrolling >= workOffset) {
        $("footer a").css("visibility", "visible").hide().stop().fadeIn(3000);
      }
    });
  });*/
  
  function readMore() {
    "use strict";
    var moreText = document.getElementById("attach_box");
    var secBox = document.getElementById("sec_box");
    if (secBox.style.display === "none") {
      secBox.style.display = "flex";
      moreText.innerHTML = "show less";
    } else {
      secBox.style.display = "none";
      moreText.innerHTML = "show more";
    }
  }
 
  AOS.init();
  

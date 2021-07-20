(function ($, window, document, undefined) {
  "use strict";

  $(document).ready(() => {
    ("use strict");
    function toggleSidebar() {
      $(".menu").click(() => {
        $("nav.sidebar").addClass("display");
      });
      $(".close-nav").click(() => {
        $("nav.sidebar").removeClass("display");
      });
    }

    toggleSidebar();
  });
})(jQuery, window, document);

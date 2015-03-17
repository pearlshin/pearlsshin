$(document).ready(function(){
   $("a.nav1").click(function () {
      // switch all tabs off
      $(".active").removeClass("active");
      // switch this tab on
      $(this).addClass("active");
   });
});
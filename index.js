/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function checkResponsive() {
  var x = document.getElementById("site-topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


$(document).ready(function() {
    // When the user scrolls the page, execute checkResponsive 
    window.onscroll = function() {checkSticky()};

    // Get the navbar
    var navbar = $('#site-topnav');

    // Get the offset position of the navbar
    var sticky = navbar.offset().top;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function checkSticky() {

      if (window.pageYOffset >= sticky) {
        navbar.addClass("sticky")
      } else {
        navbar.removeClass("sticky");
      }
    }
});

$('[data-fancybox]').fancybox({
  protect: true,
  buttons : [
    'zoom',
    'thumbs',
    'close'
  ]
});


$('[data-fancybox="watermark"]').fancybox({
  protect    : true,
  slideClass : 'watermark',
  toolbar    : false,
  smallBtn   : true
});




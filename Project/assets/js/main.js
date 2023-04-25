
// Toggle Table
$(".accordian-body").on("show.bs.collapse", function () {
  $(this).closest("table").find(".collapse.in").not(this);
});
// My-Acoount 
$(document).ready(function() {
  
  $(".account-type > ul > li").click(function() {
     $(".account-type > ul > li").removeClass("active");
    $(this).addClass("active");

    var index = $(this).index();
    $(".account-content > div").addClass("d-none");
    $(".account-content > div:eq(" + index + ")").removeClass("d-none");
  });
});
$(document).ready(function() {
  
  $(".basket .basket-icon").click(function() {
    $(".basket-content").toggle("d-block");
    $(".basket-content .close-div").click(function(){
      $(".basket-content").css({"display":"none"});
    })
  });
});
// COUNT VE PRICE ELAQESI

$(document).ready(function() {
  $('tr').each(function() {
    var count = $(this).find('.count-input').val();
    var price = $(this).find('.price-column').text().replace('$', '');
    var total = count * price;
    $(this).find('.total-price-column').text('$' + total);
  });
   $('.count-input').on('change', function() {
    $('tr').each(function() {
      var count = $(this).find('.count-input').val();
      var price = $(this).find('.price-column').text().replace('$', '');
      var total = count * price;
      $(this).find('.total-price-column').text('$' + total);
    });
  });
});
// CARUSEL
  
$('.slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4, 
   autoplay: true,
  autoplaySpeed: 3000,
  arrows:false,
});

$('.feedback-slider ').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:false
});
// Timer
$(document).ready(function(){
  var countDownDate = new Date("May 16, 2023 00:23:59").getTime(); // hedef tarihi ayarla
  var x = setInterval(function() {
    var now = new Date().getTime(); 
    var distance = countDownDate - now;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $(".days").html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);
    if (distance < 0) {
      clearInterval(x);
    $('.timer').addClass('d-none')    }
  }, 1000);
});
// ZOOM
$(function(){
$(".xzoom, .xzoom-gallery").xzoom({
  zoomWidth:400,
  tint:"#333",
  Xoffset:15
})
});
// REVIEWS AND DESCRIPTION
$(document).ready(function() {
  
  $("#description-review .rev").click(function() {
    $("#description-review .rev").addClass("active");
    $("#description-review .desc").removeClass("active");
    $("#description-review .description").addClass("d-none");

    // $(".basket-content .close-div").click(function(){
    //   $(".basket-content").css({"display":"none"});
    // })
  });
});
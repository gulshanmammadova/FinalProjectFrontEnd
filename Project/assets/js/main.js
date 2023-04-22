
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
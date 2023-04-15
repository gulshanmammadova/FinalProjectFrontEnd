// document.addEventListener('aos:in', ({ detail }) => {
//     console.log('animated in', detail);
//   });
  
//   document.addEventListener('aos:out', ({ detail }) => {
//     console.log('animated out', detail);
//   });
//   Contactdaki fade-in animasiyasi
$(document).ready(function() {
  $('.play-button').on('click', function() {
    $(this).hide();
    $('.video-player').show();
  });

// Scroll olayı dinleyicisi
$("#image-container").scroll(function() {
  // Resim öğelerinin opacity değerini artırmak için loop ile döngü başlatıyoruz
  $(".image-container img").each(function() {
    var imgOpacity = $(this).css("opacity"); // Mevcut opacity değerini alıyoruz
    var newOpacity = parseFloat(imgOpacity) + 0.1; // Mevcut değeri 0.1 artırıyoruz
    $(this).css("opacity", newOpacity); // Yeni opacity değerini atıyoruz
  });
});
  
});
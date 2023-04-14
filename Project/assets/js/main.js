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
});
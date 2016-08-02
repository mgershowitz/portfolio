
console.log('connected')
$(()=> {


$('#bioB a').on('click', (e) =>{
    $('html, body').animate({
        scrollTop: $("#about").offset().top -100
    }, 500);
})



$('#projB a').on('click', (e) =>{
  $('html, body').animate({
        scrollTop: $("#projects").offset().top -100
    }, 500);
})

$('#ringB a').on('click', (e) =>{
  $('html, body').animate({
        scrollTop: $("#contact").offset().top -100
    }, 500);
})

$('.navB a').on('mouseover', function(e) {
  $(this).css('color', '#90CAF9');
})
$('.navB a').on('mouseout', function(e) {
  $(this).css('color', '#ffffff');
})


// $('.img').on('mouseover', function (e) {
//     $(this).css('width', "315px")
// })

// $('.img').on('mouseout', function (e) {
//   $(this).css('width', "300px")

// })



})





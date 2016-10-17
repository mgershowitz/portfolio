
console.log('connected')
$(()=> {


$('#bioB a').on('click', (e) =>{
    $('html, body').animate({
        scrollTop: $("#about").offset().top -100
    }, 500);
})



$('#projB').on('click', (e) =>{
  $('html, body').animate({
        scrollTop: $("#projects").offset().top -100
    }, 500);
})

$('#ringB').on('click', (e) =>{
  $('html, body').animate({
        scrollTop: $("#contact").offset().top -100
    }, 500);
})

$('#bioB').on('click', (e) =>{
  $('html, body').animate({
        scrollTop: $("#about").offset().top -100
    }, 500);
})

$('.navB').on('mouseover', function(e) {
  $(this).css('color', '#90CAF9');
})
$('.navB').on('mouseout', function(e) {
  $(this).css('color', '#ffffff');
})

$('.navB a').on('mouseover', function(e) {
  $(this).css('color', '#90CAF9');
})
$('.navB a').on('mouseout', function(e) {
  $(this).css('color', '#ffffff');
})


$('#nagB').on('mouseover', function (e) {
    $('#nagB img').css('box-shadow','5px 5px 5px grey').css('opacity','1')
    $('#cook').css('display','none')
    $('#happy').css('display','none')
    $('#yahtzee').css('display','none')
    $('#nag').css('display','inline-block');


})

$('#nagB').on('mouseout', function (e) {
    $('#nagB img').css('box-shadow','2px 2px 2px grey').css('opacity','.85')
})

$('#cookB').on('mouseover', function (e) {
    $('#cookB img').css('box-shadow','5px 5px 5px grey').css('opacity','1')
    $('#nag').css('display','none')
    $('#happy').css('display','none')
    $('#yahtzee').css('display','none')
      $('#cook').css('display','inline-block');


})

$('#cookB').on('mouseout', function (e) {
    $('#cookB img').css('box-shadow','2px 2px 2px grey').css('opacity','.85')
})

$('#happyB').on('mouseover', function (e) {
    $('#happyB img').css('box-shadow','5px 5px 5px grey').css('opacity','1')
    $('#cook').css('display','none')
    $('#nag').css('display','none')
    $('#yahtzee').css('display','none')
    $('#happy').css('display','inline-block');
})

$('#happyB').on('mouseout', function (e) {
    $('#happyB img').css('box-shadow','2px 2px 2px grey').css('opacity','.85')
})

$('#yahtzeeB').on('mouseover', function (e) {
    $('#yahtzeeB img').css('box-shadow','5px 5px 5px grey').css('opacity','1')
    $('#cook').css('display','none')
    $('#happy').css('display','none')
    $('#nag').css('display','none')
    $('#yahtzee').css('display','inline-block');
})

$('#yahtzeeB').on('mouseout', function (e) {
    $('#yahtzeeB img').css('box-shadow','2px 2px 2px grey').css('opacity','.85')
})

$('#about img').on('mouseover', function (e) {
    $(this).css('box-shadow','5px 5px 5px grey')
})

$('#about img').on('mouseout', function (e) {
    $(this).css('box-shadow','2px 2px 2px grey')
})


// $('.reachOut').eq(1).on('mouseover', function (e) {
//   $(this).attr('src', "./img/number.png").css('width', '7vw')

// })

// $('.reachOut').eq(1).on('mouseout', function (e) {
//   $(this).attr('src', "./img/phone.png").css('width', '4vw')

// })
// $('.reachOut').eq(0).on('mouseover', function (e) {
//   $(this).attr('src', "./img/slackname.png").css('width', '7vw')

// })

// $('.reachOut').eq(0).on('mouseout', function (e) {
//   $(this).attr('src', "./img/slack.png").css('width', '4vw')

// })

})





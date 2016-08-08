
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

$('.navB a').on('mouseover', function(e) {
  $(this).css('color', '#90CAF9');
})
$('.navB a').on('mouseout', function(e) {
  $(this).css('color', '#ffffff');
})


$('#nagB').on('mouseover', function (e) {
    $('#nagB img').css('box-shadow','5px 5px 5px grey').css('opacity','1')
    $('#nag').toggle('fast', function() {
    if ($(this).is(':visible'))
        $(this).css('display','inline-block');
  })
})

$('#nagB').on('mouseout', function (e) {
    $('#nagB img').css('box-shadow','2px 2px 2px grey').css('opacity','.85')
    $('#nag').css('display','none')
})

$('#cookB').on('mouseover', function (e) {
    $('#cookB img').css('box-shadow','5px 5px 5px grey').css('opacity','1')
    $('#cook').toggle('fast', function() {
    if ($(this).is(':visible'))
        $(this).css('display','inline-block');
  })
})

$('#cookB').on('mouseout', function (e) {
    $('#cookB img').css('box-shadow','2px 2px 2px grey').css('opacity','.85')
    $('#cook').css('display','none')
})

$('#happyB').on('mouseover', function (e) {
    $('#happyB img').css('box-shadow','5px 5px 5px grey').css('opacity','1')
    $('#happy').toggle('fast', function() {
    if ($(this).is(':visible'))
        $(this).css('display','inline-block');
  })
})

$('#happyB').on('mouseout', function (e) {
    $('#happyB img').css('box-shadow','2px 2px 2px grey').css('opacity','.85')
    $('#happy').css('display','none')
})

$('#yahtzeeB').on('mouseover', function (e) {
    $('#yahtzeeB img').css('box-shadow','5px 5px 5px grey').css('opacity','1')
    $('#yahtzee').toggle('fast', function() {
    if ($(this).is(':visible'))
        $(this).css('display','inline-block');
  })
})

$('#yahtzeeB').on('mouseout', function (e) {
    $('#yahtzeeB img').css('box-shadow','2px 2px 2px grey').css('opacity','.85')
    $('#yahtzee').css('display','none')
})

$('#about img').on('mouseover', function (e) {
    $(this).css('box-shadow','5px 5px 5px grey')
})

$('#about img').on('mouseout', function (e) {
    $(this).css('box-shadow','2px 2px 2px grey')
})


$('.reachOut').eq(1).on('mouseover', function (e) {
  $(this).attr('src', "./img/number.png")

})

$('.reachOut').eq(1).on('mouseout', function (e) {
  $(this).attr('src', "./img/phone.png")

})
$('.reachOut').eq(0).on('mouseover', function (e) {
  $(this).attr('src', "./img/slackname.png")

})

$('.reachOut').eq(0).on('mouseout', function (e) {
  $(this).attr('src', "./img/slack.png")

})

})





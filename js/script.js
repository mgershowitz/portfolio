const greetings = [
                    'Welcome',
                    'Good to see you',
                    'Valar Morghulis',
                    'Don\'t spend all day inside',
                    'What IS the deal with airline food?',
                    'I believe',
                    'Wubba Lubba Dub Dubs!!!',
                    'Hello',
                    'Be excellent to each other',
                    "I can show you the world",
                    'Who wants to be $$$\'aire!',
                    'Mirror, Mirror',
                    'Who are you?',
                    'We goina Sizzler',
                    'I am the one who knocks!'
                    ]



let i = 0;


console.log('connected')
$(()=> {



// setInterval(function
//   (){
//     $("#welcome h1").addClass('animated bounceOutRight')
//     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//     $(this).removeClass().addClass('title').text(greetings[i]).addClass('animated bounceInLeft')
//     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//     $(this).removeClass().addClass('title');
//   })
//   })
//     i = Math.floor(Math.random()*greetings.length)
// }, 3500);


$('#email').on('click', function(e) {
  $(this).text("")
  $('#email img').toggle('show'/'hide')
})

$('#me').on('mouseover', function(e){
  $(this).text("FULL STACK!! pew pew pew!!!")
})

$('#me').on('mouseleave', function(e){
  $(this).text("Matt Gershowitz")
})

$('#me').on('click', (e) =>{
    $('html, body').animate({
        scrollTop: $("#welcome").offset().top
    }, 500);
})

$('#bioB').on('click', (e) =>{
    $('html, body').animate({
        scrollTop: $("#about").offset().top -100
    }, 500);
})

$('#linksB').on('click', (e) =>{
  $('html, body').animate({
        scrollTop: $("#links").offset().top -75
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

$('.navB').on('mouseover', function(e) {
  $(this).css('background-color', '#B6B6B6');
})
$('.navB').on('mouseout', function(e) {
  $(this).css('background-color', '#03A9F4');
})


$('.img').on('mouseover', function (e) {
    $(this).css('width', "315px")
})

$('.img').on('mouseout', function (e) {
  $(this).css('width', "300px")

})



})





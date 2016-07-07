const greetings = [
                    'Welcome',
                    'Good to see you',
                    'Valar Morghulis',
                    'Don\'t spend all day inside',
                    'What\'s the deal with airline food?',
                    'I believe',
                    'Wubba Lubba Dub Dubs!!!',
                    'Hello',
                    'Be excellent to each other'
                    ]

let welcomeMessage = () => {
  let i = Math.floor(Math.random()*greetings.length)
  greetings[i]
}




$(()=> {
console.log('connected')


// setInterval(function(){
//     $("#welcome h1").text(welcomeMessage).fadeIn("slow");
//     $("#welcome h1").delay(40).fadeOut("slow");
// }, 18);

// $('#email img').on('mouseover', function(e) {
//   $(this).toggle('show'/'hide')();
//   $('#email').text('mattgershowitz1@gmail.com').addClass('animated bounceInUp')
//   .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//   $(this).removeClass().addClass('reachOut')
// });
// })

$('#email').on('click', function(e) {
  $(this).text("")
  $('#email img').toggle('show'/'hide')
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





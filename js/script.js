$(document).ready(function() {
console.log("connected!")



$('#me').hover(function(e) {
  $(this).attr('src', "./assets/meLinkedin.jpg");
},
function(e) {
  $(this).attr('src', "./assets/mattCongestedCat.png");
})

$('h1').hover(function(e) {
  $(this).text('Web Developer!!');
},
function(e) {
  $(this).text('Matt Gershowitz');
})

$('.personal-links').hover(function(e) {
  $(this).css('color', 'blue');
},
function(e) {
  $(this).css('color', 'white');
});
});

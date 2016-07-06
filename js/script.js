$(()=> {

$('#phone').on('mouseover', (e) => {
  $('#phone').addClass('animated flash')
  .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  $('#phone').removeClass()
});
})

$('#phone').on('click', (e) => {
  $('#contact').fadeToggle('fast')
  $('#phone').off('mouseover')
})

$('#bioB').on('click', (e) =>{
  if(!$('#links').css('display', 'none')){
    $('#links').fadeToggle('fast');
  }
  if(!$('#projects').css('display', 'none')){
    $('#projects').fadeToggle('fast');
  }
  $('#about').fadeToggle('fast')
})

$('#linksB').on('click', (e) =>{
  if(!$('#about').css('display', 'none')){
  $('#about').fadeToggle('fast');
  }
  if(!$('#projects').css('display', 'none')){
    $('#links').fadeToggle('fast');
  }
  $('#links').fadeToggle('fast')
})

$('#projB').on('click', (e) =>{
  if(!$('#about').css('display', 'none')){
  $('#about').fadeToggle('fast');
  }
  if(!$('#links').css('display', 'none')){
    $('#links').fadeToggle('fast');
  }
  $('#projects').fadeToggle('fast')
})

$('#projB').on('mouseover', (e) =>{
  $('#projB').css('background-color', 'deepskyblue');
})
$('#projB').on('mouseout', (e) =>{
  $('#projB').css('background-color', 'firebrick');
})
$('#bioB').on('mouseover', (e) =>{
  $('#bioB').css('background-color', 'deepskyblue');
})
$('#bioB').on('mouseout', (e) =>{
  $('#bioB').css('background-color', 'firebrick');
})
$('#linksB').on('mouseover', (e) =>{
  $('#linksB').css('background-color', 'deepskyblue');
})
$('#linksB').on('mouseout', (e) =>{
  $('#linksB').css('background-color', 'firebrick');
})

$('.img').on('mouseover', function (e) {
    $(this).css('width', "315px")
})

$('.img').on('mouseout', function (e) {
  $(this).css('width', "300px")

})



})





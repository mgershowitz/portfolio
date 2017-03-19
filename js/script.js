$(()=> {

$('.image-container').hover(function(e){
  $(this).find('.project-image').stop().animate({
    'opacity': '1'
  },300)
  $(this).find('.project-text').stop().animate({'padding-bottom': '45px'},500);
  $(this).find('.project-detail-text').removeClass('animated fadeOutLeft')
  .css('display','block').addClass('animated fadeInLeft').one()
}, function(e){
  $(this).find('.project-image').stop().animate({
    'opacity': '.3'
  },300)
  $(this).find('.project-text').stop().animate({'padding-bottom': '0px'},500);
  $(this).find('.project-detail-text').removeClass('animated fadeInLeft')
  //
  .addClass('animated fadeOutLeft')
  let $that = $(this)
  setTimeout(function(){
    $that.find('.project-detail-text').css('display','none')
  },700);
})


 let shrinkHeader = 100;
  $(window).scroll(() => {
    let scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
        $('.nav').addClass('shrink')
      }
      else {
        $('.nav').removeClass('shrink')

      }
  });

const getCurrentScroll = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
    }


  //buttons navigate to different places on the page
  $('#proj-link').on('click', function(e){
      $('html, body').animate({
          scrollTop: $('#projects').offset().top
      }, 500);
     console.log('click')
  })

  $('#contact-link').on('click', function(e){
    $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 500);
    console.log('click')
  })

  //highlights the nav buttons light blue
  const turnBlue = function(e){
    $(this).css('color', '#1976D2')
  }

  const turnWhite = function(e){
    $(this).css('color', '#ffffff')
  }

  const turnBorderBlue = function(e){
    $(this).css('color', '#1976D2').css('border', '2px solid #1976D2');
  }

  const turnBorderWhite = function(e){
    $(this).css('color', '#ffffff').css('border', '2px solid #fff');
  }

  $('.nav-link').hover(turnBlue, turnWhite);
  $('.nav-link a').hover(turnBlue, turnWhite);
  $('#me').hover(turnBlue, turnWhite)
  $('.project-text').hover(turnBlue, turnWhite);
  $('.project-detail-text').hover(turnBorderBlue, turnBorderWhite);



  //adds color to the conatct images by replacing the src
  $('.external-contact-icons').children().hover(
    function(e){
      switch($(this).attr('id')){
        case 'email':
          $(this).find('img').attr('src','./img/emailSelect.png')
        break;
        case 'github':
          $(this).find('img').attr('src','./img/githubSelect.png');
        break;
        default:
          $(this).find('img').attr('src','./img/linkedinSelect.png');
        break;
      }
    },
    function(e){
      switch($(this).attr('id')){
        case 'email':
          $(this).find('img').attr('src','./img/email.png')
        break;
        case 'github':
          $(this).find('img').attr('src','./img/25231.png');
        break;
        default:
          $(this).find('img').attr('src','./img/linkedin-logo-3.png');
        break;
      }
    }
  );

});





/*   _____          __    __      ________                    .__                  .__  __
  /     \ _____ _/  |__/  |_   /  _____/  ___________  _____|  |__   ______  _  _|__|/  |_________
 /  \ /  \\__  \\   __\   __\ /   \  ____/ __ \_  __ \/  ___/  |  \ /  _ \ \/ \/ /  \   __\___   /
/    Y    \/ __ \|  |  |  |   \    \_\  \  ___/|  | \/\___ \|   Y  (  <_> )     /|  ||  |  /    /
\____|__  (____  /__|  |__|    \______  /\___  >__|  /____  >___|  /\____/ \/\_/ |__||__| /_____ \
        \/     \/                     \/     \/           \/     \/                             \/
  ___ ___ .________________________   ___ ___ .___   _____    ___________________  ________      _____ _____.___.
 /   |   \|   \______   \_   _____/  /   |   \|   | /     \   \__    ___/\_____  \ \______ \    /  _  \\__  |   |
/    ~    \   ||       _/|    __)_  /    ~    \   |/  \ /  \    |    |    /   |   \ |    |  \  /  /_\  \/   |   |
\    Y    /   ||    |   \|        \ \    Y    /   /    Y    \   |    |   /    |    \|    `   \/    |    \____   |
 \___|_  /|___||____|_  /_______  /  \___|_  /|___\____|__  /   |____|   \_______  /_______  /\____|__  / ______|
       \/             \/        \/         \/             \/                     \/        \/         \/\/       */


$(()=> {

  //buttons navigate to different places on the page
  $('#projB').on('click', function(e){
      $('html, body').animate({
          scrollTop: 0
      }, 500);
     console.log('click')
  })

  $('#ringB').on('click', function(e){
    $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 500);
    console.log('click')
  })

  //highlights the nav buttons light blue
  const turnBlue = function(e){
    $(this).css('color', '#90caf9');
  }

  const turnWhite = function(e){
    $(this).css('color', '#ffffff');
  }

  $('.navB').hover(turnBlue, turnWhite);
  $('.navB a').hover(turnBlue, turnWhite);

  //creates a mouseover function that highlights the img and displays the correct description
  const highlightImg = function(e){
    $(this).find('img').css('box-shadow','5px 5px 5px grey').css('opacity','1');

    switch($(this).attr('id')){
      case 'cookB':
        $('#happy').css('display', 'none');
        $('#nag').css('display', 'none');
        $('#search').css('display', 'none');
        $('#yahtzee').css('display', 'none');
        $('#cook').css('display', 'inline-block');
      break;
      case 'happyB':
        $('#happy').css('display', 'none');
        $('#nag').css('display', 'none');
        $('#search').css('display', 'none');
        $('#yahtzee').css('display', 'none');
        $('#happy').css('display', 'inline-block');
      break;
      case 'nagB':
        $('#cook').css('display', 'none')
        $('#happy').css('display', 'none');
        $('#search').css('display', 'none');
        $('#yahtzee').css('display', 'none');
        $('#nag').css('display', 'inline-block');
      break;
      case 'searchB':
        $('#cook').css('display', 'none')
        $('#happy').css('display', 'none');
        $('#nag').css('display', 'none');
        $('#yahtzee').css('display', 'none');
        $('#search').css('display', 'inline-block');
      break;
      case 'yahtzeeB':
        $('#cook').css('display', 'none')
        $('#happy').css('display', 'none');
        $('#nag').css('display', 'none');
        $('#search').css('display', 'none');
        $('#yahtzee').css('display', 'inline-block');
      break;
      default:
      break;
    }
  }

  //returns the img to default opacity
  const leaveDiv = function(e){
    $(this).find('img').css('box-shadow','2px 2px 2px grey').css('opacity','.85');
  }

  //adds event listeners
  $('#nagB').hover(highlightImg, leaveDiv);
  $('#cookB').hover(highlightImg, leaveDiv);
  $('#happyB').hover(highlightImg, leaveDiv);
  $('#searchB').hover(highlightImg, leaveDiv);
  $('#yahtzeeB').hover(highlightImg, leaveDiv);

  //toggles drop shadow on my img
  $('#about img').hover(
    function (e) {
      $(this).css('box-shadow','5px 5px 5px grey');
    },
    function (e) {
      $(this).css('box-shadow','2px 2px 2px grey');
    }
  );

  //adds color to the conatct images by replacing the src
  $('#contact').children().hover(
    function(e){
      switch($(this).attr('id')){
        case 'email':
          $(this).find('img').attr('src','./img/emailSelect.png');
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
          $(this).find('img').attr('src','./img/email.png');
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





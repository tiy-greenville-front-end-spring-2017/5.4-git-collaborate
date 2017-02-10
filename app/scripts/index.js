var $ = require('jquery');

var button = require('../templates/get_hip.hbs');
var puppyList = require('../templates/puppy_list.hbs');
var $audio = $('#audio');

$('.app').html(button());

$(document).on('keydown', function(e){
  if (e.keyCode == 13) {
    showPuppies();
  }
});

$('.js-get-puppies').click(function(event){
  showPuppies();
});

function showPuppies(){
  $audio.attr('src', 'images/camera.mp3');
  $audio[0].play();

  $('.app').html(puppyList());

  $('a').click(function(e){
    e.preventDefault();
  });

  $('.puppy-selection').click(function(e){
    console.log($('input[name="puppy"]:checked').val());
  });
}

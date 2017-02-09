var $ = require('jquery');


var button = require('../templates/get_hip.hbs');
var puppyList = require('../templates/puppy_list.hbs');

$('.app').html(button());

$('.js-get-puppies').click(function(event){
  $('.app').html(puppyList());
  
  var $audio = $('#audio');
  $audio.attr('src', 'images/camera.mp3');
  $audio[0].play();
});

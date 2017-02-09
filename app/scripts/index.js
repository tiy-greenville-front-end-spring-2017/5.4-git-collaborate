var $ = require('jquery');
var $audio = $('#audio');

var splash = require('../templates/get_hip.hbs');
var fight = require('../templates/puppy_list.hbs');

$('.app').html(splash());

$('.js-get-puppies').click(function(event){
  $('.app').html(fight());
});

$audio.attr('src', 'images/camera.mp3');
$audio[0].play();

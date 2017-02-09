var $ = require('jquery');
var $audio = $('#audio');

var splash = require('../templates/splash.hbs');
var fight = require('../templates/fight.hbs');

$('.app').html(splash());

$('.js-start-game').click(function(event){
  $('.app').html(fight());
});

$audio.attr('src', 'images/camera.mp3');
$audio[0].play();

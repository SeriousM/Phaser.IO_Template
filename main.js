(function(){
  'use strict';
  var game_states = {};

  var boot_state = new GameState(
    function preload(){},
    function create(){},
    function update(){});

  game_states.boot = boot_state;

  // Initialize Phaser, and creates a 400x490px game
  var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

  // Add and start the 'main' state to start the game
  game.state.add('boot', game_states.boot);
  game.state.start('boot');
})();
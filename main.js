(function(){
  // Initialize Phaser, and creates a 400x490px game
  var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');
  var game_state = {};

  // Creates a new 'main' state that will contain the game
  game_state.main = function() { };
  game_state.main.prototype = {

    preload: function() {
        // Function called first to load all the assets
    },

    create: function() {
        // Fuction called after 'preload' to setup the game
    },

    update: function() {
        // Function called 60 times per second
    },
  };

  // Add and start the 'main' state to start the game
  game.state.add('main', game_state.main);
  game.state.start('main');
})();
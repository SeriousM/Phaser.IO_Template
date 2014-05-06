var GameState = (function(){
  'use strict';
  function GameState(preload, create, update){
    var self = this;
    this._preload = preload;
    this._create = create;
    this._update = update;
  }
  GameState.prototype.preload = function() {
    // Function called first to load all the assets
    this._preload();
  }
  GameState.prototype.create = function() {
    // Fuction called after 'preload' to setup the game
    this._create();
  }
  GameState.prototype.update = function() {
    // Function called 60 times per second
    this._update();
  }
  return GameState;
})();
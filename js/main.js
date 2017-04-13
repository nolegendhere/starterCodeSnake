function Game(options){
    this.rows = options.rows;
    this.columns = options.columns;
    this.snake = options.snake;

    for(var rowIndex = 0; rowIndex < this.rows; rowIndex++) {

      for(var columnIndex = 0; columnIndex < this.columns; columnIndex++) {

        $('.container').append($('<div>').addClass('cell board').attr('data-row', rowIndex).attr('data-column', columnIndex));
      }
    }
}

Game.prototype.drawSnake = function () {
  this.snake.body.forEach(function(position,index){
    var selector ='[data-row='+position.row+'][data-column='+ position.column +']';
    $(selector).addClass('snake');
  });
};

Game.prototype.startGame = function () {
  setInterval(this.update.bind(this),100);
};

Game.prototype.clearSnake = function () {
  $('.snake').removeClass('snake');
};

Game.prototype.update = function () {
  this.snake.moveForward(this.rows,this.columns);
  this.clearSnake();
  this.drawSnake();

};

Game.prototype.assignControlKeys = function () {
  //var self = this;
  $('body').on('keydown',function(e){
    //console.log(e.keyCode);

    switch (e.keyCode) {
      case 37:
        //console.log("left");
        this.snake.goLeft();
        break;
      case 38:
        //console.log("uo");
        this.snake.goUp();
        break;
      case 39:
        //console.log("right");
        this.snake.goRight();
        break;
      case 40:
        //console.log("down");
        this.snake.goDown();
        break;
    }
  }.bind(this));
};


$(document).ready(function(){

  var game = new Game({
    rows: 50,
    columns: 50,
    snake: new Snake()
  });

  game.startGame();
  game.assignControlKeys();


});

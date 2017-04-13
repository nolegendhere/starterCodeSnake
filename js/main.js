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


$(document).ready(function(){

  var game = new Game({
    rows: 50,
    columns: 50,
    snake: new Snake()
  });

  game.drawSnake();

});

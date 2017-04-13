function Game(options){
    this.rows = options.rows;
    this.columns = options.columns;

    for(var rowIndex = 0; rowIndex < this.rows; rowIndex++) {

      for(var columnIndex = 0; columnIndex < this.columns; columnIndex++) {

        $('.container').append($('<div>').addClass('cell board').attr('data-row', rowIndex).attr('data-column', columnIndex));
      }
    }
}


$(document).ready(function(){

  var game = new Game({
    rows: 50,
    columns: 50 
  });

});

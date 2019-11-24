let mem_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'];
let mem_val = [];
let mem_tile_ids = [];
let tiles_flipped = 0;

Array.prototype.shuffle = function () {
  let i = this.length, j, temp;
  while (--i > 0){
      j = Math.floor(Math.random() * (i+1));
      temp = this[j];
      this[j] = this[i];
      this[i] = temp;
  }
};

function newBoard() {
    tiles_flipped = 0;
    let outpout = '';
    mem_array.shuffle();
    for (let i = 0; i < mem_array.length; i++) {
        outpout += '<div id="tile_' + i + '" onclick="memFliptile(this, \'' + mem_array[i] + '\')"></div>'
    }
    document.getElementById('memboard').innerHTML = outpout;
}
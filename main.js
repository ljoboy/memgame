let mem_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'];
let mem_val = [];
let mem_tile_ids = [];
let tiles_flipped = 0;

Array.prototype.shuffle = function () {
    let i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
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

function memFliptile(tile, val) {
    if ((tile.innerHTML === "") && (mem_val.length < 2)) {
        tile.style.background = '#ffffff';
        tile.innerHTML = val;
        if (mem_val.length === 0) {
            mem_val.push(val);
            mem_tile_ids.push(tile.id);
        } else if (mem_val.length === 1) {
            mem_val.push(val);
            mem_tile_ids.push(tile.id);
            if (mem_val[0] === mem_val[1]) {
                tiles_flipped += 2;
                mem_val = [];
                mem_tile_ids = [];
                if (tiles_flipped === mem_array.length) {
                    alert('Tableau effacé... Encours de regeneration');
                    document.getElementById('memboard').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2back() {
                    let t1 = document.getElementById(mem_tile_ids[0]);
                    let t2 = document.getElementById(mem_tile_ids[1]);

                    t1.style.background = 'url(logo.svg) no-repeat';
                    t2.style.background = 'url(logo.svg) no-repeat';
                    t1.innerHTML = "";
                    t2.innerHTML = "";

                    mem_val = [];
                    mem_tile_ids = [];
                }

                setTimeout(flip2back, 700);
            }
        }
    }
}
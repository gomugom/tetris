const blockTypes = require('./blockTypes');

const blockData = ()=> [0, 0, 0, 0].map((_, y) =>
    [0, 0, 0, 0].map((__, x)=> `<div class="tetris__col" style="left:${x*25}px; top:${y*25}px"></div>`)
);

const nextTemplate = (blockIndex) => {
    const blockGrid = blockTypes[blockIndex][0].map(arr=> [arr[0]+1, arr[1]+2]);
    const nextBlock = blockData();
    if(blockIndex > 0) blockGrid.forEach(v =>
        nextBlock[v[1]][v[0]] = `<div class="tetris__col type${blockIndex}" style="left:${v[0]*25}px; top:${v[1]*25}px"></div>`
    );
    return nextBlock.reduce((rows, row) =>
        `${rows}${row.reduce((cols, col)=>
            `${cols}${col}`
        , '')}`
    , '');
}

module.exports = nextTemplate;

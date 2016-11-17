const ClassNames = require('classnames');
const CONST = require('../constants');

const bgTemplate = bg =>
`<div class="tetris__grid" style="width:${CONST.COL*25}px; height:${CONST.ROW*25}px">
${bg.reduce((rows, row, i)=>
    `${rows}${row.reduce((cols, col, j)=>
        `${cols}<div
            class="${ClassNames('tetris__col', {
                [`type${col}`]: Number.isFinite(col),
                hidden: i < CONST.HIDDEN_ROW
            })}"
            style="left:${j*25}px; top:${(i-CONST.HIDDEN_ROW)*25}px"
        ></div>`
    , '')}`
, '')}
</div>
`;

const defaultBg = [...'0'.repeat(CONST.ROW + CONST.HIDDEN_ROW)].map(()=>
    new Array(CONST.COL).fill(0)
);

module.exports = {
    bgTemplate,
    defaultBg
}

const BLOCK_TYPES = require('./constants/BLOCK_TYPES');
const CONST = require('./constants/CONST');

class Block {
    constructor(type) {
        this.info = {
            type,
            rotate : 0,
            shape: BLOCK_TYPES[type],
            offset: [ Math.floor(CONST.COL / 2) - 1, CONST.HIDDEN_ROW - 1 ]
        };
        this.setPos(0, 0);
    }

    setPos(dx, dy) {
        this.info.offset = [ this.info.offset[0] + dx, this.info.offset[1] + dy ];
        this.pos = this.info.shape[this.info.rotate].map(([x, y])=> [
            x + this.info.offset[0],
            y + this.info.offset[1]
        ]);
    }

    checkAvailability(frame) {
        return this.pos.every(([x, y])=>
            x >= 0 &&
            x < CONST.COL &&
            y >= 0 &&
            y < CONST.ROW + CONST.HIDDEN_ROW &&
            frame[y][x] === 0
        )
    }

    rotate(cw = 'cw') {
        this.info.rotate = (this.info.rotate + (cw === 'cw' ? 1 : 3)) % 4;
        this.setPos(0, 0);
    }

    transfer(dir, frame) {
        let pos = [];
        if(dir === 'up') {
            this.rotate('cw');
            if(!this.checkAvailability(frame)) this.rotate('ccw');
            return false;
        }

        switch(dir) {
            case 'left': pos = [-1, 0]; break;
            case 'right': pos = [1, 0]; break;
            case 'down': pos = [0, 1]; break;
        }
        this.setPos(...pos);
        const isAvailable = this.checkAvailability(frame);
        if(!isAvailable) {
            this.setPos(...pos.map(v=> v*-1));
            if(dir === 'down') return true;
        }
        return false;
    }
}

module.exports = Block;

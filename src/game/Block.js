const blockTypes = require('./templates/blockTypes');
const CONST = require('./constants');

class Block {
    constructor(type) {
        this.info = {
            type,
            rotate : 0,
            shape: blockTypes[type],
            offset: [ Math.floor(CONST.COL / 2) - 1, CONST.HIDDEN_ROW - 1 ]
        };
        this.setPos(0, 0);
    }
    setPos(dx, dy) {
        this.info.offset = [ this.info.offset[0] + dx, this.info.offset[1] + dy ];
        this.pos = this.info.shape[this.info.rotate].map(arr=> [
            arr[0] + this.info.offset[0],
            arr[1] + this.info.offset[1]
        ]);
    }
    rotate(cw = 'cw') {
        this.info.rotate = (this.info.rotate + (cw === 'cw' ? 1 : 3)) % 4;
        this.setPos(0, 0);
    }
    isAvailable(bg) {
        return this.pos.every(arr=>
            arr[0] >= 0 &&
            arr[0] < CONST.COL &&
            arr[1] >= 0 &&
            arr[1] < CONST.ROW + CONST.HIDDEN_ROW &&
            bg[arr[1]][arr[0]] === 0
        )
    }
    move(dir, bg) {
        let pos = [];
        if(dir === 'up') {
            this.rotate('cw');
            if(!this.isAvailable(bg)) this.rotate('ccw');
            return false;
        }

        switch(dir) {
            case 'left': pos = [-1, 0]; break;
            case 'right': pos = [1, 0]; break;
            case 'down': pos = [0, 1]; break;
        }
        this.setPos(...pos);
        const availability = this.isAvailable(bg);
        if(!availability) {
            this.setPos(...pos.map(v=> v*-1));
            if(dir === 'down') return true;
        }
        return false;
    }
}

module.exports = Block;

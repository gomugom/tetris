const generateBlocksHTML = require('./templates/generateBlocksHTML');
const nextBlock = require('./templates/generateNextBlockHTML');
const CONST = require('./constants/CONST');
const Block = require('./Block');
const { getTime } = require('../util');

class Game {
    constructor(endCallback) {
        this.dom = {
            main: document.getElementById('main'),
            score: document.getElementById('score'),
            count: document.getElementById('count'),
            time: document.getElementById('time'),
            next: document.getElementById('next')
        }
        this.endCallback = endCallback;
        this.keyState = {};
        this.fireKeyUp = false;

        this.renderPlayTime = this.renderPlayTime.bind(this);
        this.startGame = this.startGame.bind(this);
        this.endGame = this.endGame.bind(this);
        this.keyEventHandler = this.keyEventHandler.bind(this);
        this.moveDown = this.moveDown.bind(this);

        this.initGame();
    }

    initGame() {
        this.speed = 1;
        this.score = 0;
        this.count = 0;
        this.time = 0;
        this.keyEventWatchTimer = null;
        this.tick = null;
        this.GameTimer = null;
        this.block = 0;
        this.frame = CONST.DEFAULT_BLOCKS.map(row=>[...row]);
        this.dom.main.innerHTML = generateBlocksHTML(this.frame);
        this.dom.next.innerHTML = nextBlock(0);
        this.dom.time.innerText = getTime(this.time);
        this.dom.score.innerText = this.score;
        this.dom.count.innerText = this.count;
    }

    startGame() {
        this.initGame();
        this.nextBlockIndex = Math.ceil(Math.random()* CONST.BLOCK_TYPES);
        this.addNewBlock();
        this.GameTimer = setInterval(this.renderPlayTime, 1000);
        this.keyEventWatchTimer = setInterval(this.keyEventHandler, 75);
        window.addEventListener('keydown', this.keyEventListener.bind(this), true);
        window.addEventListener('keyup', this.keyEventListener.bind(this), true);
    }

    endGame() {
        window.removeEventListener('keydown', this.keyEventListener);
        window.removeEventListener('keyup', this.keyEventListener);
        clearInterval(this.GameTimer);
        clearInterval(this.tick);
        clearInterval(this.keyEventWatchTimer);
        this.block = null;
        this.endCallback(null, {score: this.score, time: this.time, count: this.count}, 'TRY AGAIN');
    }

    renderMain() {
        this.showBlock();
        this.dom.main.innerHTML = generateBlocksHTML(this.frame);
    }

    renderPlayTime() {
        this.dom.time.innerText = getTime(++this.time);
    }

    renderScore() {
        this.speed = Math.ceil((this.count || 1) / 10);
        this.dom.count.innerText = this.count;
        this.dom.score.innerText = this.score;
    }

    renderNext() {
        this.dom.next.innerHTML = nextBlock(this.nextBlockIndex)
    }

    keyEventListener(e) {
        let bool = false;
        if(e.type === 'keydown') bool = true;
        const keyCode = e.keyCode || e.which;
        this.keyState[keyCode] = bool;
        if(!bool && CONST.KEYBOARD_NAME[keyCode] === 'up') this.fireKeyUp = false;
    }

    keyEventHandler() {
        const keys = Object.keys(this.keyState);
        keys.forEach(v=> {
            if(this.keyState[v]) {
                const key = CONST.KEYBOARD_NAME[v];
                switch(key) {
                    case 'down': this.moveDown(); return;
                    case 'left':
                    case 'right':
                        this.transfer(key);
                        return;
                    case 'up':
                        if(!this.fireKeyUp) {
                            this.fireKeyUp = true;
                            this.transfer(key);
                        }
                        return;
                }
            }
        });
    }

    transfer(key) {
        this.removeBlock();
        this.block.transfer(key, this.frame);
        this.renderMain();
    }

    moveDown() {
        this.removeBlock();
        const isFinished = this.block.transfer('down', this.frame);
        this.renderMain();
        if(isFinished) this.moveEnd();
    }

    moveEnd() {
        this.removeCompleted();
        if(this.block.pos.some(([x, y])=>
            y <= CONST.HIDDEN_ROW
            && x >= 3
            && x < 6
        )) {
            this.endGame();
            return;
        }
        this.addNewBlock();
    }

    removeCompleted() {
        let completedRowsLength = 0;
        const uncompletedRowsArray = this.frame.filter((row, i)=> {
            if(row.every(col => col > 0)) {
                completedRowsLength += 1;
                return false;
            }
            return true;
        });
        this.score += CONST.SCORE_POINT[completedRowsLength];
        this.count += completedRowsLength;
        this.renderScore();
        this.frame = [
            ...CONST.GET_DEFAULT_HIDDEN_ROWS()
            , ...uncompletedRowsArray.slice(CONST.HIDDEN_ROW - completedRowsLength)
        ];
    }

    addNewBlock() {
        clearInterval(this.tick);
        const interval = Math.floor( CONST.INITIAL_DURATION * (
            1 - Math.log(this.speed) / CONST.DECREASE_DURATION_FACTOR
        ));
        this.tick = setInterval(this.moveDown, interval);
        this.block = new Block(this.nextBlockIndex);
        this.nextBlockIndex = Math.ceil(Math.random() * CONST.BLOCK_TYPES);
        this.renderMain();
        this.renderNext();
    }

    removeBlock() {
        this.block.pos.forEach(([x, y]) => {
            if(
                this.frame[y] !== undefined
                && this.frame[y] !== null
                && this.frame[y][x] > 0
            ) {
                this.frame[y][x] = 0;
            }
        });
    }

    showBlock() {
        this.block.pos.forEach(([x, y]) => {
            if(
                this.frame[y] !== undefined
                && this.frame[y] !== null
                && this.frame[y][x] === 0
            ) {
                this.frame[y][x] = this.block.info.type
            }
        });
    }

}

module.exports = Game;

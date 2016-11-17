const { bgTemplate, defaultBg } = require('./templates/game-bg');
const nextTemplate = require('./templates/game-next');
const Block = require('./Block');
const { getTime } = require('../util');
const CONST = require('./constants');

const emptyRow = new Array(CONST.COL).fill(0);

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
        this.fireUp = false;

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
        this.moveTimer = null;
        this.GameTimer = null;
        this.block = 0;
        this.bg = defaultBg.map(row=>[...row]);
        this.dom.next.innerHTML = nextTemplate(0);
        this.dom.main.innerHTML = bgTemplate(this.bg);
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
        clearInterval(this.moveTimer);
        clearInterval(this.keyEventWatchTimer);
        this.block = 0;
        this.endCallback(null, {score: this.score, time: this.time, count: this.count}, 'TRY AGAIN');
    }

    renderMain() {
        this.showBlock();
        this.dom.main.innerHTML = bgTemplate(this.bg);
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
        this.dom.next.innerHTML = nextTemplate(this.nextBlockIndex)
    }

    keyEventListener(e) {
        let bool = false;
        if(e.type === 'keydown') bool = true;
        const keyCode = e.keyCode || e.which;
        this.keyState[keyCode] = bool;
        if(!bool && CONST.KEYBOARD_NAME[keyCode] === 'up') this.fireUp = false;
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
                        this.move(key, this.bg);
                        return;
                    case 'up':
                        if(!this.fireUp) {
                            this.fireUp = true;
                            this.move(key, this.bg);
                        }
                        return;
                }
            }
        });
    }

    move(key, bg) {
        this.removeBlock();
        this.block.move(key, this.bg);
        this.renderMain();
    }

    moveDown() {
        this.removeBlock();
        const isFinished = this.block.move('down', this.bg);
        this.renderMain();
        if(isFinished) this.moveEnd();
    }

    moveEnd() {
        this.removeCompleted();
        if(this.block.pos.some(arr=>
            arr[1] <= CONST.HIDDEN_ROW
            && arr[0] >= 2 && arr[0] < 6
        )) {
            this.endGame();
            return;
        }
        this.bg = this.bg.map((v,i)=> i >= CONST.HIDDEN_ROW ? v : [...emptyRow]);
        this.addNewBlock();
    }

    addNewBlock() {
        clearInterval(this.moveTimer);
        const interval = Math.floor( CONST.INITIAL_DURATION * (
            1 - Math.log(this.speed) / CONST.DECREASE_DURATION_FACTOR
        ));
        this.moveTimer = setInterval(this.moveDown, interval);
        this.block = new Block(this.nextBlockIndex);
        this.nextBlockIndex = Math.ceil(Math.random() * CONST.BLOCK_TYPES);
        this.renderMain();
        this.renderNext();
    }

    removeCompleted() {
        let completedRows = 0;
        const uncompletedBg = this.bg.filter((row, i)=> {
            if(row.every(col => col > 0)) {
                completedRows += 1;
                return false;
            }
            return true;
        });
        this.score += CONST.SCORE_POINT[completedRows];
        this.count += completedRows;
        this.renderScore();
        this.bg = [...[...'0'.repeat(completedRows)].map(()=> [...emptyRow]), ...uncompletedBg];
    }

    removeBlock() {
        this.block.pos.forEach(arr => {
            if(this.bg[arr[1]] !== undefined && this.bg[arr[1]] !== null && this.bg[arr[1]][arr[0]] > 0) {
                this.bg[arr[1]][arr[0]] = 0;
            }
        });
    }

    showBlock() {
        this.block.pos.forEach(arr => {
            if(this.bg[arr[1]] !== undefined && this.bg[arr[1]] !== null && this.bg[arr[1]][arr[0]] === 0) {
                this.bg[arr[1]][arr[0]] = this.block.info.type
            }
        });
    }

}

module.exports = Game;

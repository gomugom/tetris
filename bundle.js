/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },
/* 1 */
/***/ function(module, exports) {

	const KEYBOARD_NAME = {
	    37: 'left',
	    38: 'up',
	    39: 'right',
	    40: 'down'
	};
	
	const SCORE_POINT = [0, 100, 500, 1000, 2000];
	
	const COL = 10;
	const ROW = 20;
	const HIDDEN_ROW = 4;
	
	const INITIAL_DURATION = 1000;
	const DECREASE_DURATION_FACTOR = 4.5;
	const BLOCK_TYPES = 7;
	
	module.exports = {
	    KEYBOARD_NAME,
	    SCORE_POINT,
	    COL,
	    ROW,
	    HIDDEN_ROW,
	    INITIAL_DURATION,
	    DECREASE_DURATION_FACTOR,
	    BLOCK_TYPES
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	const blockTypes = {
	    0: [ // 빈 값
	        [
	            []
	        ]
	    ],
	    1: [
	        [
	            [0, -1], [1, -1],
	            [0, 0],  [1, 0]
	        ], [
	            [0, -1], [1, -1],
	            [0, 0],  [1, 0]
	        ], [
	            [0, -1], [1, -1],
	            [0, 0],  [1, 0]
	        ], [
	            [0, -1], [1, -1],
	            [0, 0],  [1, 0]
	        ]
	    ],
	    2: [
	        [
	                    [0, -1],
	            [-1, 0], [0, 0], [1, 0]
	        ], [
	                    [0, -2],
	                    [0, -1], [1, -1],
	                    [0, 0]
	        ], [
	            [-1, -1], [0, -1], [1, -1],
	                    [0, 0]
	        ], [
	                    [0, -2],
	            [-1, -1], [0, -1],
	                    [0, 0]
	        ]
	    ],
	    3: [
	        [
	                            [1, -1],
	                    [0, 0], [1, 0],
	                    [0, 1]
	        ], [
	            [-1, -1], [0, -1],
	                      [0, 0], [1, 0]
	        ], [
	                            [1, -1],
	                    [0, 0], [1, 0],
	                    [0, 1]
	        ], [
	            [-1, -1], [0, -1],
	                      [0, 0], [1, 0]
	        ]
	    ],
	    4: [
	        [
	                    [0, -1],
	                    [0, 0], [1, 0],
	                             [1, 1]
	        ], [
	                    [0, -1], [1, -1],
	            [-1, 0], [0, 0]
	        ], [
	                    [0, -1],
	                    [0, 0], [1, 0],
	                             [1, 1]
	        ], [
	                    [0, -1], [1, -1],
	            [-1, 0], [0, 0]
	        ]
	    ],
	    5: [
	        [
	                              [0, -2],
	                              [0, -1],
	                              [0, 0],
	                              [0, 1]
	        ], [
	            [-2, 0], [-1, 0], [0, 0], [1, 0]
	        ], [
	                              [0, -2],
	                              [0, -1],
	                              [0, 0],
	                              [0, 1]
	        ], [
	            [-2, 0], [-1, 0], [0, 0], [1, 0]
	        ]
	    ],
	    6: [
	        [
	
	            [-1, -1],
	            [-1, 0], [0, 0], [1, 0]
	        ], [
	                    [0, -1], [1, -1],
	                    [0, 0],
	                    [0, 1]
	        ], [
	            [-1, 0], [0, 0], [1, 0],
	                             [1, 1]
	        ], [
	                     [0, -1],
	                     [0, 0],
	            [-1, 1], [0, 1]
	        ]
	    ],
	    7: [
	        [
	
	                             [1, -1],
	            [-1, 0], [0, 0], [1, 0]
	        ], [
	                    [0, -1],
	                    [0, 0],
	                    [0, 1], [1, 1]
	        ], [
	            [-1, 0], [0, 0], [1, 0],
	            [-1, 1]
	        ], [
	            [-1, -1], [0, -1],
	                      [0, 0],
	                      [0, 1]
	        ]
	    ],
	    8: [
	        [
	            [-1, -1],       , [1, -1],
	                     [0, 0], [1, 0]
	        ], [
	                    [0, -2],
	            [-1, -1],
	            [-1, 0], [0, 0]
	        ], [
	            [-1, -2], [0, -2],
	            [-1, -1],          [1, -1]
	        ], [
	                    [0, -2], [1, -2],
	                             [1,  -1],
	                    [0, 0]
	        ]
	    ],
	    9: [
	        [
	            [-1, -1],       , [1, -1],
	            [-1, 0], [0, 0]
	        ], [
	            [-1, -2], [0, -2],
	            [-1, -1],
	                      [0, 0]
	        ], [
	                      [0, -2], [1, -2],
	            [-1, -1],           [1, -1]
	        ], [
	                    [0, -2],
	                             [1,  -1],
	                    [0, 0],  [1,  0]
	        ]
	    ]
	};
	
	module.exports = blockTypes;


/***/ },
/* 3 */
/***/ function(module, exports) {

	const getDigit = num => (num < 10) ? '0' + num : num;
	
	const getTime = time => {
	    const minute = Math.floor(time / 60);
	    const second = time % 60;
	    return getDigit(minute) + ':' + getDigit(second);
	}
	
	const localStorageCtrl = {
		getItem(keyName) {
			const value = localStorage.getItem(keyName);
			return JSON.parse(value);
		},
		setItem(keyName, value) {
			localStorage.setItem(keyName, (typeof value === 'object') ? JSON.stringify(value) : value);
		},
		removeItem(item) {
			localStorage.removeItem(item);
		}
	}
	
	module.exports = {
	    getTime,
	    localStorageCtrl
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	const blockTypes = __webpack_require__(2);
	const CONST = __webpack_require__(1);
	
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const { bgTemplate, defaultBg } = __webpack_require__(8);
	const nextTemplate = __webpack_require__(9);
	const Block = __webpack_require__(6);
	const { getTime } = __webpack_require__(3);
	const CONST = __webpack_require__(1);
	
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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const ClassNames = __webpack_require__(4);
	const CONST = __webpack_require__(1);
	
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	const blockTypes = __webpack_require__(2);
	
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


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(7);
	const Home = __webpack_require__(11);
	const Score = __webpack_require__(12);
	__webpack_require__(5);
	
	class Main {
	    constructor() {
	        this.Game = new Game(this.renderScore.bind(this));
	        this.modal = null;
	        this.modalEvents = [];
	        this.modalDom = document.getElementById('modal');
	        this.renderModal({
	            Class: Home,
	            callback: this.renderScore.bind(this)
	        });
	    }
	
	    renderModal({Class, callback, item, startName}) {
	        this.removeModal();
	        this.modal = new Class(this.Game.startGame, callback);
	        this.modalDom.innerHTML = this.modal.getModalTemplate(item, startName);
	        this.registerModalEvents();
	    }
	
	    renderScore(e, item = null, startName = 'Play Game') {
	        this.renderModal({
	            Class: Score,
	            callback: null,
	            item: item,
	            startName: startName
	        });
	    }
	
	    registerModalEvents() {
	        this.modalEvents = this.modal.events.map(({target = window, name, callback, isClose}) => {
	            if(isClose) {
	                return {target, name, callback: ()=> {
	                    callback();
	                    this.removeModal();
	                }}
	            }
	            return {target, name, callback}
	        });
	        this.modalEvents.forEach(({target, name, callback}) => {
	            if(target) {
	                if(typeof target === 'string') {
	                    const tg = document.querySelector(target);
	                    if(tg) tg.addEventListener(name, callback);
	                }
	                else target.addEventListener(name, callback)
	            }
	        });
	    }
	
	    removeModal() {
	        this.modalEvents && this.modalEvents.forEach(({target, name, callback}) => {
	            if(target) {
	                if(typeof target === 'string') {
	                    const tg = document.querySelector(target);
	                    if(tg) tg.removeEventListener(name, callback);
	                }
	                else target.removeEventListener(name, callback);
	            }
	        });
	        this.modal = null;
	        this.modalEvents = null;
	        this.modalDom.innerHTML = '';
	    }
	}
	
	new Main();


/***/ },
/* 11 */
/***/ function(module, exports) {

	class Home {
	    constructor(startGame, callback) {
	        this.events = [{
	            target: '#startGame',
	            name: 'click',
	            callback: startGame,
	            isClose: true
	        }, {
	            target: '#showScoreModal',
	            name: 'click',
	            callback: callback,
	            isClose: false
	        }];
	    }
	    getModalTemplate() {
	return `<div class="modal-wrap">
	    <div class="modal modal--home">
	        <h3>TETRIS!</h3>
	        <p>by gomugom</p>
	        <div class="modal__footer">
	            <button id="showScoreModal">Rank</button>
	            <button id="startGame">Start Game</button>
	        </div>
	    </div>
	</div>`;
	    }
	}
	
	module.exports = Home;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	const { localStorageCtrl, getTime } = __webpack_require__(3);
	
	class Score {
	    constructor(startGame, callback, startName) {
	        this.scoreList = localStorageCtrl.getItem('tetrisScores') || [];
	        this.events = [{
	            target: '#start',
	            name: 'click',
	            callback: startGame,
	            isClose: true
	        }, {
	            target: '#userName',
	            name: 'keydown',
	            callback: this.saveUser.bind(this),
	            isClose: false
	        }];
	        this.getModalTemplate = this.getModalTemplate.bind(this);
	    }
	    saveUser(e) {
	        if(e.keyCode === 13 && e.target.value.length) {
	            e.target.removeEventListener('keydown', this.saveUser);
	            const data = JSON.parse(e.target.dataset.info);
	            const userData = {
	                name: e.target.value,
	                score: data.score,
	                time: data.time
	            };
	            this.scoreList.splice(data.index, 1, userData);
	            this.scoreList = this.scoreList.sort((a,b)=> b.score - a.score);
	            localStorageCtrl.setItem('tetrisScores', this.scoreList);
	            document.getElementById('scoreList').innerHTML = this.getScoreList();
	        }
	    }
	    getScoreList(item) {
	        if(item) this.scoreList.push(Object.assign({name: ''}, item ));
	        const scores = this.scoreList.sort((a,b)=> b.score - a.score).slice(0, 10).reduce((list, {name, score, time, count}, i) =>
	            `${list}
	            <tr>
	                <td>${i+1}</td>
	                <td>${score}</td>
	                <td>${name ? name : `<input id="userName" autofocus="true" type="text" data-info='{"index": ${i}, "score":${score}, "time":${time}}'/>`}</td>
	                <td>${getTime(time)}</td>
	            </tr>`
	        , '');
	        return scores;
	    }
	    getModalTemplate(item, startName) {
	        const scores = this.getScoreList(item);
	return `<div class="modal-wrap">
	    <div class="modal modal--score">
	        <h3>RANKING TOP 10</h3>
	        <table>
	            <colgroup>
	                <col style="width:10%" />
	                <col style="width:30%" />
	                <col style="width:40%" />
	                <col style="width:20%" />
	            </colgroup>
	            <thead>
	                <tr>
	                    <th>No.</th>
	                    <th>Score</th>
	                    <th>Name</th>
	                    <th>Time</th>
	                </tr>
	            </thead>
	            <tbody id="scoreList">
	                ${scores}
	            </tbody>
	        </table>
	        <div class="modal__footer">
	            <button id="start">${startName || 'TRY AGAIN'}</button>
	        </div>
	    </div>
	</div>`;
	    }
	}
	
	module.exports = Score;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
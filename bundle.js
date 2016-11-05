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

	module.exports = __webpack_require__(6);


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
	const BRICK_TYPES = 7;
	
	module.exports = {
	    KEYBOARD_NAME,
	    SCORE_POINT,
	    COL,
	    ROW,
	    HIDDEN_ROW,
	    INITIAL_DURATION,
	    DECREASE_DURATION_FACTOR,
	    BRICK_TYPES
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	const types = {
	    '-1': [ // 빈 값
	        [
	            []
	        ]
	    ],
	    0: [
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
	    1: [
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
	    2: [
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
	    3: [
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
	    4: [
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
	    5: [
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
	    6: [
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
	    7: [
	        [
	            [-1, 0],       , [1, 0],
	                     [0, 1], [1, 1]
	        ], [
	                    [0, -1],
	            [-1, 0],
	            [-1, 1], [0, 1]
	        ], [
	            [-1, -1], [0, -1],
	            [-1, 0],          [1, 0]
	        ], [
	                    [0, -1], [1, -1],
	                             [1,  0],
	                    [0, 1]
	        ]
	    ],
	    8: [
	        [
	            [-1, 0],       , [1, 0],
	            [-1, 1], [0, 1]
	        ], [
	            [-1, -1], [0, -1],
	            [-1, 0],
	                      [0, 1]
	        ], [
	                      [0, -1], [1, -1],
	            [-1, 0],           [1, 0]
	        ], [
	                    [0, -1],
	                             [1,  0],
	                    [0, 1],  [1,  1]
	        ]
	    ]
	};
	
	module.exports = types;


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

	const Play = __webpack_require__(10);
	const Home = __webpack_require__(7);
	const Score = __webpack_require__(8);
	__webpack_require__(5);
	
	class Main {
	    constructor() {
	        this.play = new Play(this.renderScore.bind(this));
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
	        this.modal = new Class(this.play.startGame, callback);
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
/* 7 */
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
/* 8 */
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	const brickTypes = __webpack_require__(2);
	const CONST = __webpack_require__(1);
	
	class Brick {
	    constructor(type) {
	        this.info = {
	            type: type,
	            rotate : 0,
	            shape: brickTypes[type],
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
	            bg[arr[1]][arr[0]].type === null
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
	
	module.exports = Brick;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	const { bgTemplate, defaultBg } = __webpack_require__(11);
	const nextTemplate = __webpack_require__(12);
	const Brick = __webpack_require__(9);
	const { getTime } = __webpack_require__(3);
	const CONST = __webpack_require__(1);
	
	const nullRow = [...'0'.repeat(CONST.COL)].map(v=>({type: null}));
	
	class Play {
	    constructor(endCallback) {
	        this.dom = {
	            main: document.getElementById('main'),
	            score: document.getElementById('score'),
	            count: document.getElementById('count'),
	            time: document.getElementById('time'),
	            next: document.getElementById('next')
	        }
	        this.startGame = this.startGame.bind(this);
	        this.endCallback = endCallback;
	        this.endGame = this.endGame.bind(this);
	        this.keyEventHandler = this.keyEventHandler.bind(this);
	        this.renderPlayTime = this.renderPlayTime.bind(this);
	        this.moveDown = this.moveDown.bind(this);
	        this.resetGame();
	        this.keyState = {};
	        this.fireUp = false;
	    }
	
	    resetGame() {
	        this.speed = 1;
	        this.score = 0;
	        this.count = 0;
	        this.time = 0;
	        this.keyEventWatchTimer = null;
	        this.moveTimer = null;
	        this.playTimer = null;
	        this.brick = null;
	        this.bg = defaultBg.map(row=>[...row]);
	        this.dom.next.innerHTML = nextTemplate(-1);
	        this.dom.main.innerHTML = bgTemplate(this.bg);
	        this.dom.time.innerText = getTime(this.time);
	        this.dom.score.innerText = this.score;
	        this.dom.count.innerText = this.count;
	    }
	
	    startGame() {
	        this.resetGame();
	        this.nextBrickIndex = Math.floor(Math.random()* CONST.BRICK_TYPES);
	        this.addNewBrick();
	        this.playTimer = setInterval(this.renderPlayTime, 1000);
	        this.keyEventWatchTimer = setInterval(this.keyEventHandler, 75);
	        window.addEventListener('keydown', this.keyEventListener.bind(this), true);
	        window.addEventListener('keyup', this.keyEventListener.bind(this), true);
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
	                        this.removeBrick();
	                        this.brick.move(key, this.bg);
	                        this.renderMain();
	                        return;
	                    case 'up':
	                        if(!this.fireUp) {
	                            this.fireUp = true;
	                            this.removeBrick();
	                            this.brick.move(key, this.bg);
	                            this.renderMain();
	                        }
	                        return;
	                }
	            }
	        });
	    }
	
	    endGame() {
	        window.removeEventListener('keydown', this.keyEventListener);
	        window.removeEventListener('keyup', this.keyEventListener);
	        clearInterval(this.playTimer);
	        clearInterval(this.moveTimer);
	        clearInterval(this.keyEventWatchTimer);
	        this.brick = null;
	        this.endCallback(null, {score: this.score, time: this.time, count: this.count}, 'TRY AGAIN');
	    }
	
	    renderMain() {
	        this.showBrick();
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
	        this.dom.next.innerHTML = nextTemplate(this.nextBrickIndex)
	    }
	
	    addNewBrick() {
	        clearInterval(this.moveTimer);
	        const interval = Math.floor( CONST.INITIAL_DURATION * (
	            1 - Math.log(this.speed) / CONST.DECREASE_DURATION_FACTOR
	        ));
	        this.moveTimer = setInterval(this.moveDown, interval);
	        this.brick = new Brick(this.nextBrickIndex);
	        this.nextBrickIndex = Math.floor(Math.random() * CONST.BRICK_TYPES);
	        this.renderMain();
	        this.renderNext();
	    }
	
	    removeCompleted() {
	        let count = 0;
	        const newBg = this.bg.filter((row, i)=> {
	            if(row.every(col => col.type !== null)) {
	                count+= 1;
	                return false;
	            }
	            return true;
	        });
	        this.score += CONST.SCORE_POINT[count];
	        this.count += count;
	        this.renderScore();
	        this.bg = [...'0'.repeat(count)].map(()=> [...'0'.repeat(CONST.COL)].map(()=>({ type: null }))).concat(newBg);
	    }
	
	    moveEnd() {
	        this.removeCompleted();
	        if(this.brick.pos.some(arr=>
	            arr[1] <= CONST.HIDDEN_ROW
	            && arr[0] >= 2 && arr[0] < 6
	        )) {
	            this.endGame();
	            return;
	        }
	        this.bg = this.bg.map((v,i)=> i >= CONST.HIDDEN_ROW ? v : [...nullRow]);
	        this.addNewBrick();
	    }
	
	    moveDown() {
	        this.removeBrick();
	        const isFinished = this.brick.move('down', this.bg);
	        this.renderMain();
	        if(isFinished) this.moveEnd();
	    }
	
	    removeBrick() {
	        this.brick.pos.forEach(arr => {
	            if(this.bg[arr[1]] && this.bg[arr[1]][arr[0]]) this.bg[arr[1]][arr[0]] = {
	                type: null
	            }
	        });
	    }
	
	    showBrick() {
	        this.brick.pos.forEach(arr => {
	            if(this.bg[arr[1]] && this.bg[arr[1]][arr[0]]) this.bg[arr[1]][arr[0]] = {
	                type: this.brick.info.type
	            }
	        });
	    }
	
	}
	
	module.exports = Play;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	const ClassNames = __webpack_require__(4);
	const CONST = __webpack_require__(1);
	
	const bgTemplate = (bg) => {
	    return `<div class="tetris__grid">
	    ${bg.reduce((rows, row, i)=>
	        `${rows}${row.reduce((cols, col, j)=>
	            `${cols}<div class="${ClassNames('tetris__col', {
	                [`type${col.type}`]: Number.isFinite(col.type),
	                hidden: i < CONST.HIDDEN_ROW
	            })}"></div>`
	        , '')}`
	    , '')}
	    </div>
	`};
	
	const defaultBg = [...'0'.repeat(CONST.ROW + CONST.HIDDEN_ROW)].map(v=>
	    [...'0'.repeat(CONST.COL)].map(vv=> ({ type: null }))
	);
	
	module.exports = {
	    bgTemplate,
	    defaultBg
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	const brickTypes = __webpack_require__(2);
	
	const brickData = ()=> [...'0'.repeat(4)].map(() =>
	    [...'0'.repeat(4)].map(()=> '<div class="tetris__col"></div>')
	);
	
	const nextTemplate = (brickIndex) => {
	    const brickGrid = brickTypes[brickIndex][0].map(arr=> [arr[0]+1, arr[1]+2]);
	    const nextBrick = brickData();
	    if(brickIndex > -1) brickGrid.forEach(v =>
	        nextBrick[v[1]][v[0]] = `<div class="tetris__col type${brickIndex}"></div>`
	    );
	    return nextBrick.reduce((rows, row) =>
	        `${rows}${row.reduce((cols, col)=>
	            `${cols}${col}`
	        , '')}`
	    , '');
	}
	
	module.exports = nextTemplate;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
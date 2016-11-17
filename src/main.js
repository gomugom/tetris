const Game = require('./game/Game');
const Home = require('./modals/Home');
const Score = require('./modals/Score');
require('./tetris.scss');

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

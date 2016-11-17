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

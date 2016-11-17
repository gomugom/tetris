const { localStorageCtrl, getTime } = require('../util');

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

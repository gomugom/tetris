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

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw Error;

	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {
			i++;
		} else if (arr[i] === '--discard-prev') {
			res.pop();
		} else if (arr[i] === '--double-next') {
			if (i + 1 !== arr.length) {
				res.push(arr[i + 1]);
			}
		} else if (arr[i] === '--double-prev') {
			if (i - 1 >= 0) {
				res.push(arr[i - 1]);
			}
		} else {
			res.push(arr[i]);
		}
	}

	return res;
};
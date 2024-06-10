// returns random
export const random = (range: number, positiveResult = 1) =>
	Math.floor(Math.random() * range + 1) <= positiveResult

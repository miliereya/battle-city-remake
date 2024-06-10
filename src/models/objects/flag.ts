const gr = '#747474'
const re = '#a40000'
const or = '#c84c0c'
const no = '#000000'

export const flag = {
	alive: [
		[no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no],
		[gr, gr, no, no, no, no, no, no, no, no, no, no, no, no, gr, gr],
		[no, gr, gr, no, no, no, gr, gr, gr, no, no, no, no, gr, gr, no],
		[gr, gr, gr, gr, no, no, no, gr, re, gr, no, no, gr, gr, gr, gr],
		[no, gr, gr, gr, no, no, no, gr, gr, no, no, no, gr, gr, gr, no],
		[gr, gr, gr, gr, gr, gr, no, gr, gr, no, gr, gr, gr, gr, gr, gr],
		[no, no, gr, re, gr, gr, gr, gr, gr, gr, gr, gr, re, gr, no, no],
		[no, gr, gr, gr, re, gr, gr, gr, gr, gr, gr, re, gr, gr, gr, no],
		[no, no, gr, gr, gr, gr, re, gr, gr, re, gr, gr, gr, gr, no, no],
		[no, no, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, no, no],
		[no, no, no, gr, gr, gr, no, gr, gr, no, gr, gr, gr, no, no, no],
		[no, no, no, no, no, no, no, gr, gr, no, no, no, no, no, no, no],
		[no, no, no, no, no, no, gr, gr, gr, gr, no, no, no, no, no, no],
		[no, no, no, no, gr, gr, gr, gr, gr, gr, gr, gr, no, no, no, no],
		[no, no, no, no, gr, gr, no, gr, gr, no, gr, gr, no, no, no, no],
		[no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no],
	],
	dead: [
		[no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no],
		[no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no],
		[no, no, no, no, no, or, no, no, no, no, no, no, no, no, no, no],
		[no, no, no, no, or, or, no, gr, no, no, no, no, no, no, no, no],
		[no, no, no, no, or, no, gr, gr, gr, no, no, no, no, no, no, no],
		[no, no, no, or, no, gr, gr, gr, gr, gr, no, no, no, no, no, no],
		[no, no, or, or, no, gr, gr, gr, gr, gr, gr, gr, gr, no, no, no],
		[no, no, or, no, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, no, no],
		[no, or, or, no, gr, gr, gr, gr, gr, gr, gr, gr, no, gr, no, no],
		[no, or, no, no, gr, gr, gr, gr, gr, gr, gr, gr, no, gr, gr, no],
		[no, or, no, gr, gr, gr, gr, gr, gr, no, no, gr, no, gr, gr, no],
		[no, or, no, no, no, gr, gr, gr, no, no, no, no, no, gr, no, no],
		[no, or, no, no, no, no, no, gr, no, no, no, no, no, gr, no, no],
		[no, or, no, no, no, no, no, no, no, no, no, no, no, no, no, no],
		[no, or, no, no, no, no, no, no, no, no, no, no, no, no, no, no],
		[no, or, no, no, no, no, no, no, no, no, no, no, no, no, no, no],
	],
}

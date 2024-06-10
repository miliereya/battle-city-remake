//  @typescript-eslint/ban-types
export function mutationFilter<T>(arr: T[], cb: (c: T) => boolean) {
	for (let l = arr.length - 1; l >= 0; l -= 1) {
		if (!cb(arr[l])) arr.splice(l, 1)
	}
}

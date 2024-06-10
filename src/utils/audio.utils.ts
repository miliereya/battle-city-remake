export const createAudioElement = (path: string, volume: number) => {
	const audio = new Audio(path)
	audio.volume = volume
	return audio
}

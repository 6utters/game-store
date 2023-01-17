export interface IGameForm {
	gameName: string
	gamePrice: number
	genreNames: string[]
	featureNames: string[]
	gameImage: File
	developer: string
	publisher: string
	releaseDate: string
	os: string
	processor: string
	memory: string
	storage: string
	graphics: string
	mainInfo: string
	fstP: string
	sndP: string
	thdP: string
	ftsP?: string
	thsP?: string
}

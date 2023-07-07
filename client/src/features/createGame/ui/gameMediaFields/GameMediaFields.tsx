import { Dispatch, FC, memo, SetStateAction, useCallback } from 'react'
import { UploadField } from '@/shared/ui'
import { CreateGameArgs } from '../createGameForm/CreateGameForm'

interface GameMediaFormProps {
	setGameArgs: Dispatch<SetStateAction<CreateGameArgs>>
}

export const GameMediaFields: FC<GameMediaFormProps> = memo(props => {
	const { setGameArgs } = props

	const selectImages = useCallback(
		(e: FileEvent) => {
			const images: File[] = []
			for (let i = 0; i < Object.keys(e.target.files).length; i++)
				images.push(e.target.files[i])
			setGameArgs(prev => ({ ...prev, currentImages: images }))
		},
		[setGameArgs],
	)

	const selectVideos = useCallback(
		(e: FileEvent) => {
			const videos: File[] = []
			for (let i = 0; i < Object.keys(e.target.files).length; i++)
				videos.push(e.target.files[i])
			setGameArgs(prev => ({ ...prev, currentVideos: videos }))
		},
		[setGameArgs],
	)

	return (
		<>
			<UploadField
				title={'Choose videos for the Game'}
				multiple={true}
				onChange={selectVideos}
			/>
			<UploadField
				title={'Choose images for the Game'}
				multiple={true}
				onChange={selectImages}
			/>
		</>
	)
})

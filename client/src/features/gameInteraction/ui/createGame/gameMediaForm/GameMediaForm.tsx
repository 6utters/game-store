import React, { Dispatch, FC, memo, SetStateAction } from 'react'
import UploadField from '@/components/ui/UploadField/UploadField'

import {
	selectImages,
	selectVideos,
} from '../../../model/lib/createGameFormdata'

import styles from './GameMediaForm.module.scss'

interface GameMediaFormProps {
	setCurrentVideos: Dispatch<SetStateAction<File[]>>
	setCurrentImages: Dispatch<SetStateAction<File[]>>
}

export const GameMediaForm: FC<GameMediaFormProps> = memo(props => {
	const { setCurrentVideos, setCurrentImages } = props
	return (
		<div className={styles.mediaForm}>
			<div className={styles.fileInput}>
				<UploadField
					title={'Choose 2 videos for the Game'}
					multiple={true}
					onChange={e => selectVideos(e, setCurrentVideos)}
				/>
			</div>
			<div className={styles.fileInput}>
				<UploadField
					title={'Choose 6 images for the Game'}
					multiple={true}
					onChange={e => selectImages(e, setCurrentImages)}
				/>
			</div>
		</div>
	)
})

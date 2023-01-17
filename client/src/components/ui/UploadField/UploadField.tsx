import { ChangeEventHandler, FC } from 'react'
import styles from './UploadField.module.scss'

const UploadField: FC<{
	onChange: ChangeEventHandler
	multiple: boolean
	title: string
}> = ({ onChange, multiple, title }) => {
	return (
		<div className={styles.file}>
			<label>
				<span>{title}</span>
				<input type='file' onChange={onChange} multiple={multiple} />
			</label>
		</div>
	)
}

export default UploadField

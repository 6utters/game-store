import { ChangeEventHandler, FC, memo } from 'react'
import styles from './UploadField.module.scss'

interface UploadFieldProps {
	onChange: ChangeEventHandler
	multiple: boolean
	title: string
}

export const UploadField: FC<UploadFieldProps> = memo(props => {
	const { onChange, multiple, title } = props
	return (
		<div className={styles.file}>
			<label>
				<span>{title}</span>
				<input type='file' onChange={onChange} multiple={multiple} />
			</label>
		</div>
	)
})

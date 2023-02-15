import { FC } from 'react'
import styles from './GenreModal.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../../../../ui/Input/Input'
import { propertiesApi } from '../../../../../store/api/properties.api'
import { Modal } from '@/shared/ui/modal/Modal'

interface GenreModalForm {
	genreName: string
}

interface GenreModalProps {
	isOpen: boolean
	onClose: () => void
}

const GenreModal: FC<GenreModalProps> = ({ isOpen, onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<GenreModalForm>({
		mode: 'onBlur',
	})

	const [createGenre] = propertiesApi.useCreateGenreMutation()
	const onSubmit: SubmitHandler<GenreModalForm> = (data) => {
		createGenre(data.genreName)
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
				<div className={styles.content} onClick={(e) => e.stopPropagation()}>
					<div className={styles.title}>
						<p>Create Genre</p>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							placeholder={'Genre Name'}
							{...register('genreName', { required: 'Required' })}
							error={errors.genreName}
						/>
						<div className={styles.submit}>
							<button type={'submit'}>Create</button>
						</div>
					</form>
				</div>
		</Modal>
	)
}

export default GenreModal

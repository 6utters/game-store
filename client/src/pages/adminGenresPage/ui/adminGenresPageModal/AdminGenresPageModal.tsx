import { FC, memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '@/shared/ui/input/Input'
import { Modal } from '@/shared/ui/modal/Modal'
import { useCreateGenre } from '@/entities/Genre'

import styles from './AdminGenresPageModal.module.scss'

interface GenreModalForm {
	genreName: string
}

interface AdminGenrePageModalProps {
	isOpen: boolean
	onClose: () => void
}

export const AdminGenresPageModal: FC<AdminGenrePageModalProps> = memo(
	props => {
		const { isOpen, onClose } = props
		const [createGenre] = useCreateGenre()

		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm<GenreModalForm>({
			mode: 'onBlur',
		})

		const onSubmit: SubmitHandler<GenreModalForm> = data => {
			createGenre(data.genreName)
			onClose()
		}

		return (
			<Modal isOpen={isOpen} onClose={onClose}>
				<div className={styles.content}>
					<div className={styles.title}>
						<p>Create Genre</p>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							className={styles.modal_input}
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
	},
)

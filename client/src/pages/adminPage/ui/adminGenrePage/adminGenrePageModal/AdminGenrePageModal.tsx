import { FC, memo } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useCreateGenre } from '@/features/genreInteraction'

import Input from '@/components/ui/Input/Input'
import { Modal } from '@/shared/ui/modal/Modal'

import styles from './AdminGenrePageModal.module.scss'

interface GenreModalForm {
	genreName: string
}

interface AdminGenrePageModalProps {
	isOpen: boolean
	onClose: () => void
}

export const AdminGenrePageModal: FC<AdminGenrePageModalProps> = memo(({ isOpen, onClose }) => {
	const [createGenre] = useCreateGenre()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<GenreModalForm>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<GenreModalForm> = (data) => {
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
})


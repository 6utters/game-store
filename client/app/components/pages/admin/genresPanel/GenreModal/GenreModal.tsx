import { FC } from 'react'
import PopUp from '../../../../ui/popUp/PopUp'
import styles from './GenreModal.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IGenreForm } from '../../../../../models/IGenreForm'
import Input from '../../../../ui/Input/Input'
import { propertiesApi } from '../../../../../store/api/properties.api'

const GenreModal: FC<{
	active: boolean
	setActive: (active: boolean) => void
}> = ({ active, setActive }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IGenreForm>({
		mode: 'onBlur',
	})
	const [createGenre] = propertiesApi.useCreateGenreMutation()
	const onSubmit: SubmitHandler<IGenreForm> = (data) => {
		createGenre(data.genreName)
		setActive(false)
	}

	return (
		<>
			<PopUp modalActive={active} setModalActive={setActive}>
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
			</PopUp>
		</>
	)
}

export default GenreModal

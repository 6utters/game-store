import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFeatureForm } from '../../../../../models/IFeatureForm'
import PopUp from '../../../../ui/popUp/PopUp'
import styles from '../../genresPanel/GenreModal/GenreModal.module.scss'
import Input from '../../../../ui/Input/Input'
import { propertiesApi } from '../../../../../store/api/properties.api'

const FeatureModal: FC<{
	active: boolean
	setActive: (active: boolean) => void
}> = ({ active, setActive }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFeatureForm>({
		mode: 'onBlur',
	})
	const [createFeature] = propertiesApi.useCreateFeatureMutation()
	const onSubmit: SubmitHandler<IFeatureForm> = (data) => {
		createFeature(data.featureName)
		setActive(false)
	}

	return (
		<>
			<PopUp modalActive={active} setModalActive={setActive}>
				<div className={styles.content} onClick={(e) => e.stopPropagation()}>
					<div className={styles.title}>
						<p>Create Feature</p>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							placeholder={'Feature Name'}
							{...register('featureName', { required: 'Required' })}
							error={errors.featureName}
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

export default FeatureModal

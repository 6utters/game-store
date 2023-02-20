import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useCreateFeature } from '@/features/featureInteraction'

import Input from '@/shared/ui/input/Input'

import styles from './AdminFeaturesPageModal.module.scss'
import { Modal } from '@/shared/ui/modal/Modal'

interface FeatureModalForm {
	featureName: string
}

interface AdminFeaturePageModalProps {
	isOpen: boolean
	onClose: () => void
}

export const AdminFeaturesPageModal: FC<AdminFeaturePageModalProps> = ({
	isOpen,
	onClose,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FeatureModalForm>({
		mode: 'onBlur',
	})
	const [createFeature] = useCreateFeature()
	const onSubmit: SubmitHandler<FeatureModalForm> = data => {
		createFeature(data.featureName)
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles.content}>
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
		</Modal>
	)
}

import { FC } from 'react'
import styles from './ModalAboutField.module.scss'
import { UseFormRegister } from 'react-hook-form'
import { IGameForm } from '../../../../../../models/IGameForm'

interface IModalAboutField {
	register: UseFormRegister<IGameForm>
}

const ModalAboutField: FC<IModalAboutField> = ({ register }) => {
	return (
		<div className={styles.about}>
			<p>Game's about info</p>
			<textarea
				placeholder={'Game main information'}
				{...register('mainInfo', { required: 'Required' })}
			/>
			<textarea
				placeholder={'First Paragraph'}
				{...register('fstP', { required: 'Required' })}
			/>
			<textarea
				placeholder={'Second Paragraph'}
				{...register('sndP', { required: 'Required' })}
			/>
			<textarea
				placeholder={'Third Paragraph'}
				{...register('thdP', { required: 'Required' })}
			/>
			<textarea placeholder={'Fourth Paragraph'} {...register('ftsP')} />
			<textarea placeholder={'Fifth Paragraph'} {...register('thsP')} />
		</div>
	)
}

export default ModalAboutField
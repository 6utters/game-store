import { FC, memo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { GameArgs } from '../../model/types/CreateGame'
import styles from './GameAboutFields.module.scss'

interface GameAboutFormProps {
	register: UseFormRegister<GameArgs>
}

export const GameAboutFields: FC<GameAboutFormProps> = memo(({ register }) => {
	return (
		<div className={styles.aboutForm}>
			<p>Game&apos;s about info</p>
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
})

import { FC, memo } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { CreateGameSchema } from '@/features/gameInteraction'

import styles from './GameAboutForm.module.scss'

interface GameAboutFormProps {
	register: UseFormRegister<CreateGameSchema>
}

export const GameAboutForm: FC<GameAboutFormProps> = memo(({ register }) => {
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

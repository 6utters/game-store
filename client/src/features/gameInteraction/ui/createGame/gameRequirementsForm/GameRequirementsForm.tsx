import { FC, memo } from 'react'
import Input from '../../../../../components/ui/Input/Input'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { CreateGameSchema } from '@/features/gameInteraction'

import styles from './GameRequirementsForm.module.scss'

interface GameRequirementsFormProps {
	register: UseFormRegister<CreateGameSchema>
	errors: FieldErrors<CreateGameSchema>
}

export const GameRequirementsForm: FC<GameRequirementsFormProps> = memo(
	({ register, errors }) => {
		return (
			<div className={styles.info}>
				<Input
					style={{ height: '2rem' }}
					placeholder={'Game Developer'}
					{...register('developer', { required: 'Required' })}
					error={errors.developer}
				/>
				<Input
					style={{ height: '2rem' }}
					placeholder={'Game Publisher'}
					{...register('publisher', { required: 'Required' })}
					error={errors.publisher}
				/>
				<Input
					style={{ height: '2rem' }}
					placeholder={'Game Release Date'}
					{...register('releaseDate', { required: 'Required' })}
					error={errors.releaseDate}
				/>
				<Input
					style={{ height: '2rem' }}
					placeholder={'Operation System'}
					{...register('os', { required: 'Required' })}
					error={errors.os}
				/>
				<Input
					style={{ height: '2rem' }}
					placeholder={'CPU'}
					{...register('processor', { required: 'Required' })}
					error={errors.processor}
				/>
				<Input
					style={{ height: '2rem' }}
					placeholder={'Memory'}
					{...register('memory', { required: 'Required' })}
					error={errors.memory}
				/>
				<Input
					style={{ height: '2rem' }}
					placeholder={'Storage'}
					{...register('storage', { required: 'Required' })}
					error={errors.storage}
				/>
				<Input
					className={styles.input}
					style={{ height: '2rem' }}
					placeholder={'Graphics'}
					{...register('graphics', { required: 'Required' })}
					error={errors.graphics}
				/>
			</div>
		)
	},
)

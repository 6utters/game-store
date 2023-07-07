import { FC, memo } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { GameArgs } from '@/features/createGame/model/types/CreateGame'
import { Input } from '@/shared/ui'

import styles from './GameReqsFields.module.scss'

interface GameRequirementsFormProps {
	register: UseFormRegister<GameArgs>
	errors: FieldErrors<GameArgs>
}

export const GameReqsFields: FC<GameRequirementsFormProps> = memo(
	({ register, errors }) => {
		return (
			<div className={styles.info}>
				<Input
					className={styles.input}
					placeholder={'Game Developer'}
					{...register('developer', { required: 'Required' })}
					error={errors.developer}
				/>
				<Input
					className={styles.input}
					placeholder={'Game Publisher'}
					{...register('publisher', { required: 'Required' })}
					error={errors.publisher}
				/>
				<Input
					className={styles.input}
					placeholder={'Game Release Date'}
					{...register('releaseDate', { required: 'Required' })}
					error={errors.releaseDate}
				/>
				<Input
					className={styles.input}
					placeholder={'Operation System'}
					{...register('os', { required: 'Required' })}
					error={errors.os}
				/>
				<Input
					className={styles.input}
					placeholder={'CPU'}
					{...register('processor', { required: 'Required' })}
					error={errors.processor}
				/>
				<Input
					className={styles.input}
					placeholder={'Memory'}
					{...register('memory', { required: 'Required' })}
					error={errors.memory}
				/>
				<Input
					className={styles.input}
					placeholder={'Storage'}
					{...register('storage', { required: 'Required' })}
					error={errors.storage}
				/>
				<Input
					className={styles.input}
					placeholder={'Graphics'}
					{...register('graphics', { required: 'Required' })}
					error={errors.graphics}
				/>
			</div>
		)
	},
)

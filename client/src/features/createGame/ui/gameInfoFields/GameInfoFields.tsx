import { Dispatch, FC, memo, SetStateAction, useCallback } from 'react'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { CreateGameArgs } from '../createGameForm/CreateGameForm'
import { Input, UploadField } from '@/shared/ui'
import { GameArgs } from '../../model/types/CreateGame'
import styles from './GameInfoFields.module.scss'

interface MainInfoFormProps {
	register: UseFormRegister<GameArgs>
	errors: Partial<FieldErrorsImpl>
	setGameArgs: Dispatch<SetStateAction<CreateGameArgs>>
}

export const GameInfoFields: FC<MainInfoFormProps> = memo(
	({ register, errors, setGameArgs }) => {
		const selectFile = useCallback(
			(e: FileEvent) => {
				const file = e.target.files[0]
				setGameArgs(prev => ({ ...prev, currentFile: file }))
			},
			[setGameArgs],
		)

		return (
			<>
				<Input
					className={styles.input}
					placeholder={'Game Name'}
					autoComplete={'false'}
					{...register('gameName', { required: 'Required' })}
					error={errors.gameName}
				/>
				<Input
					className={styles.input}
					placeholder={'Game Price'}
					autoComplete={'false'}
					{...register('gamePrice', {
						pattern: {
							value: /^[0-9]+$/,
							message: 'Please enter a number',
						},
					})}
					error={errors.gamePrice}
				/>
				<UploadField
					multiple={false}
					title={'Image for the game'}
					onChange={selectFile}
				/>
			</>
		)
	},
)

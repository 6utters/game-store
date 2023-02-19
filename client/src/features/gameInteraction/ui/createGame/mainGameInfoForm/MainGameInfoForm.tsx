import { Dispatch, FC, memo, SetStateAction } from 'react'

import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import UploadField from '@/components/ui/UploadField/UploadField'

import { CreateGameSchema } from '@/features/gameInteraction'
import { selectFile } from '../../../model/lib/createGameFormdata'

import Input from '@/components/ui/Input/Input'

interface MainInfoFormProps {
	register: UseFormRegister<CreateGameSchema>
	errors: Partial<FieldErrorsImpl>
	setCurrentFile: Dispatch<SetStateAction<File | null>>
}

export const MainGameInfoForm: FC<MainInfoFormProps> = memo(
	({ register, errors, setCurrentFile }) => {
		return (
			<div>
				<Input
					style={{ marginBottom: '1.5rem', paddingLeft: '0.7rem' }}
					placeholder={'Game Name'}
					{...register('gameName', { required: 'Required' })}
					error={errors.gameName}
				/>
				<Input
					style={{ marginBottom: '1.5rem', paddingLeft: '0.7rem' }}
					placeholder={'Game Price'}
					{...register('gamePrice', {
						pattern: {
							value: /^[0-9]+$/,
							message: 'Please enter a number',
						},
					})}
					error={errors.gamePrice}
				/>
				<div>
					<UploadField
						multiple={false}
						title={'Image for the game'}
						onChange={e => selectFile(e, setCurrentFile)}
					/>
				</div>
			</div>
		)
	},
)

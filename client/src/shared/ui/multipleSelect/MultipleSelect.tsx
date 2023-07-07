import { FC, memo } from 'react'
import Select, { OnChangeValue } from 'react-select'

export interface Option {
	value: string
	label: string
}

interface MultipleSelectProps {
	options: Option[] | undefined
	placeHolder: string
	currentOptions: string[]
	setCurrentOptions: (options: string[]) => void
}

export const MultipleSelect: FC<MultipleSelectProps> = memo(
	({ options, placeHolder, currentOptions, setCurrentOptions }) => {
		const getValue = (): Option[] => {
			return currentOptions
				? options?.filter(
						option => currentOptions.indexOf(option.value) >= 0,
				  ) ?? []
				: []
		}

		const onChange = (newValue: OnChangeValue<Option, boolean>) => {
			setCurrentOptions((newValue as Option[]).map(v => v.value))
		}

		return (
			<Select
				maxMenuHeight={120}
				classNamePrefix={'custom-select'}
				onChange={onChange}
				value={getValue()}
				options={options}
				isMulti
				placeholder={placeHolder}
			/>
		)
	},
)

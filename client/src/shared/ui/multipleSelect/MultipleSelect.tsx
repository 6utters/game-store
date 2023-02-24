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
	setCurrentOptions: (option: any) => void
}

export const MultipleSelect: FC<MultipleSelectProps> = memo(
	({ options, placeHolder, currentOptions, setCurrentOptions }) => {
		const getValue = () => {
			return currentOptions
				? options?.filter(o => currentOptions.indexOf(o.value) >= 0)
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

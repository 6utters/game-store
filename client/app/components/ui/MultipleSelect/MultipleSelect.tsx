import { FC } from 'react'
import Select, { OnChangeValue } from 'react-select'

export interface IOption {
	value: string
	label: string
}

interface IMultipleSelectProps {
	options: IOption[]
	placeHolder: string
	currentOptions: string[]
	setCurrentOptions: (option: any) => void
}

const MultipleSelect: FC<IMultipleSelectProps> = ({
	options,
	placeHolder,
	currentOptions,
	setCurrentOptions,
}) => {
	const getValue = () => {
		return currentOptions
			? options.filter((o) => currentOptions.indexOf(o.value) >= 0)
			: []
	}
	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		setCurrentOptions((newValue as IOption[]).map((v) => v.value))
	}

	return (
		<>
			<Select
				maxMenuHeight={120}
				classNamePrefix={'custom-select'}
				onChange={onChange}
				value={getValue()}
				options={options}
				isMulti
				placeholder={placeHolder}
			/>
		</>
	)
}

export default MultipleSelect

// export type InputSize = 'medium' | 'large'
// export type InputType = 'text' | 'email'
//
// export type InputProps = {
// 	id: string
// 	name: string
// 	label: string
// 	type?: InputType
// 	size?: InputSize
// 	className?: string
// } & Omit<
// 	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
// 	'size'
// >
//
// const sizeMap: { [key in InputSize]: string } = {
// 	medium: 'p-3 text-base',
// 	large: 'p-4 text-base',
// }

import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

export interface IFieldProps {
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

type TypedInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IInput extends TypedInputPropsField {}

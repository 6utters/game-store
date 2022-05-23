import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { ValidationException } from '../exceptions/validation.exception'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
	private static toValidate(metatype: Function): boolean {
		const types: Function[] = [String, Boolean, Number, Array, Object]
		return !types.includes(metatype)
	}

	async transform(value: any, { metatype }: ArgumentMetadata) {
		if (!metatype || !ValidationPipe.toValidate(metatype)) {
			return value
		}
		const object = plainToInstance(metatype, value)
		const errors = await validate(object)

		if (errors.length > 0) {
			let messages = errors.map((err) => {
				return `${err.property} - ${Object.values(err.constraints).join(', ')}`
			})
			throw new ValidationException(messages)
		}
		return value
	}
}

import {
	ACCESS_TOKEN_LOCAL_STORAGE_KEY,
	USER_LOCAL_STORAGE_KEY,
} from '../../../src/shared/consts'
import { AuthByEmailResponse } from '../../../src/features/authByEmail'
import { selectByTestId } from '../../e2e/helpers/selectByTestId'

export const login = (
	email: string = 'admin@gmail.com',
	password: string = '123456',
) => {
	cy.request<AuthByEmailResponse>({
		method: 'POST',
		url: `http://localhost:5000/api/auth/login`,
		body: {
			email,
			password,
		},
	}).then(({ body }) => {
		window.localStorage.setItem(
			ACCESS_TOKEN_LOCAL_STORAGE_KEY,
			JSON.stringify(body.accessToken),
		)
		window.localStorage.setItem(
			USER_LOCAL_STORAGE_KEY,
			JSON.stringify(body.user),
		)
		return body
	})
}

export const getByTestId = (testId: string) => {
	return cy.get(selectByTestId(testId))
}

declare global {
	namespace Cypress {
		interface Chainable {
			login(email?: string, password?: string): Chainable<AuthByEmailResponse>
			getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
		}
	}
}

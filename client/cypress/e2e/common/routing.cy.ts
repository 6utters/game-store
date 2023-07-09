import { selectByTestId } from '../helpers/selectByTestId'

describe('Routing', () => {
	describe('Unauthorized user', () => {
		it('goes to store page', () => {
			cy.visit('/')
			cy.get(selectByTestId('StorePage')).should('exist')
		})
		it('attempts to visit cart page, but being redirected to common page', () => {
			cy.visit('/cart')
			cy.get(selectByTestId('LoginPage')).should('exist')
		})
		it('attempts to visit nonexistent page', () => {
			cy.visit('/random', { failOnStatusCode: false })
			cy.get(selectByTestId('NotFoundPage')).should('exist')
		})
	})
	describe('Authorized user', () => {
		beforeEach(() => {
			cy.login('user@gmail.com', '123456')
		})
		it('goes to cart page', () => {
			cy.visit('/cart')
			cy.get(selectByTestId('CartPage')).should('exist')
		})
		it('attempts to visit cart page, but being redirected to common page', () => {
			cy.visit('/admin')
			cy.get(selectByTestId('NotFoundPage')).should('exist')
		})
	})
	describe('Admin', () => {
		beforeEach(() => {
			cy.login()
		})
		it('goes to admin page', () => {
			cy.visit('/admin')
			cy.get(selectByTestId('AdminPage')).should('exist')
		})
	})
})

describe('Search', () => {
	beforeEach(() => {
		cy.visit('/')
	})
	it('should find a game and visit the page', () => {
		cy.getByTestId('Searchbar.Input').type('the witcher')
		cy.getByTestId('Searchbar.Dropdown').should('exist')
		cy.getByTestId('Searchbar.Game').should(
			'have.text',
			'The Witcher 3: Wild Hunt...',
		)
		cy.getByTestId('Searchbar.Game').click()
		cy.getByTestId('GamePage')
		cy.getByTestId('Searchbar.Dropdown').should('not.exist')
	})
	it("shouldn't find a game", () => {
		cy.getByTestId('Searchbar.Input').type('some random game')
		cy.getByTestId('Searchbar.Dropdown').should('exist')
		cy.getByTestId('Searchbar.BrowseAll').should('have.text', 'Browse all')
	})
})

export {}


/// <reference types="cypress" />
it('iConect Test', function () {

	cy.visit('https://en.wikipedia.org/wiki/The_Beatles')

	// Navigates to Paul McCartney page
	cy.get('.infobox-caption > [href="/wiki/Paul_McCartney"]').click()

	// Save the year in a variable to compare later
	let year1
	cy.get('.mw-parser-output > :nth-child(6)').contains('1942').then(() => {
		year1 = 1942
	})

	cy.go('back')

	// Navigates to John Lennon page
	cy.get('.infobox-caption > [href="/wiki/John_Lennon"]').click()

	//Comparison of years 
	cy.get(':nth-child(3) > .infobox-data').should('contain', '1940').then((bday) => {
		expect(year1).to.be.greaterThan(1940)
		assert.isAtLeast(year1, 1940, 'year1 greater than 1940, Paul McCartney is older than John Lennon')
	})
})

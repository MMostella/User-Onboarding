describe('User-Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const firstNameInput = () => cy.get('input[name=first_name]')
    const lastNameInput = () => cy.get('input[name=last_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=terms]')
    const submitButton = () => cy.get(`button[id='submitButton']`)
    const fooInput = () => cy.get('input[name=foo]')

    it('Sanity Check', () => {
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('Proper element are showing', () => {
        firstNameInput().should('exist')
        lastNameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termsInput().should('exist')
        submitButton().should('exist')
        fooInput().should('not.exist')

        cy.contains('SUBMIT').should('exist')
    })

    // describe('')
})
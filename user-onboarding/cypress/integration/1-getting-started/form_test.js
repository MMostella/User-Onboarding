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

    describe('Getting inputs and canceling', () => {
        it('Can navigate to the site', () => {
            cy.url().should('include', 'localhost')
        })

        it('Submit button starts out disbaled', () => {
            submitButton().should('be.disabled')
        })

        it('First name typing', () => {
            firstNameInput()
                .should('have.value', '')
                .type('Mason')
                .should('have.value', 'Mason')
        })

        it('Last name typing', () => {
            lastNameInput()
                .should('have.value', '')
                .type('Mostella')
                .should('have.value', 'Mostella')
        })

        it('Email typing', () => {
            emailInput()
                .should('have.value', '')
                .type('masonmostella@gmail.com')
                .should('have.value', 'masonmostella@gmail.com')
        })

        it('Password typing', () => {
            passwordInput()
                .should('have.value', '')
                .type('abcdefg')
                .should('have.value', 'abcdefg')
        })
    })
})
/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />


describe('visist website', () => {

    it('tesct 1', () => {
        
        cy.visit("https://www.automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('Hello world')
        cy.get('#ContactUsFrm_first_name').type('Hello world')
        cy.get('#ContactUsFrm_first_name').should('have.attr','name','first_name')

        cy.get('#ContactUsFrm_email').type('Helloorld@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Hello world')
        cy.xpath('//*[contains(@title,"Submit")]').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        cy.log("All tests passed")

    });
});
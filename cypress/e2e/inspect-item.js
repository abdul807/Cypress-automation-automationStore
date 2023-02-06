/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />


describe('visist website', () => {

    it('tesct 1', () => {
        
        cy.visit("https://www.automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1)').click()
        cy.get('.productname').contains('Skinsheen Bronzer Stick')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('Hello world')
        cy.get('#ContactUsFrm_first_name').type('Hello world')
        cy.get('#ContactUsFrm_first_name').should('have.attr','name','first_name')

        cy.get('#ContactUsFrm_email').type('Helloorld@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Hello world')
        cy.xpath('//*[contains(@title,"Submit")]').click()
        // cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        // assertions
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')

    });

    it('tesct 2', () => {
        
        cy.visit("https://www.automationteststore.com/")
        // cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1)').click()
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(ItemHeader){
            cy.log('Item is : ' + ItemHeader.text())
        })
        // cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click().then
      

    });

    it.only('tesct 2', () => {
        
        cy.visit("https://www.automationteststore.com/")
        cy.xpath("//a[contains(@href,'contact')]").click().then(function(ItemText){
            cy.log(ItemText.text())
            console.log(ItemText.text())
        })
        // cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1)').click()
        // cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(ItemHeader){
        //     cy.log('Item is : ' + ItemHeader.text())
        // })
        // cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click().then
      

    });
});
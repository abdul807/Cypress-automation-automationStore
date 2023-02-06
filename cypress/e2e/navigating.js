/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />


describe('visist website', () => {

    it.only('tesct 1', () => {
        
        cy.visit("https://www.automationteststore.com/")
        // cy.get("a[href*='index.php?rt=product/category&path=']").contains('Makeup').click().then(function(ItemText){
        //     cy.log(ItemText.text())
        // })
        cy.get("a[href*='index.php?rt=product/category&path=']").contains('Makeup').click().then(function($ItemText){
            const header = $ItemText.text()
            // expect(header).to.be('Makeup')
            cy.log(header);
            // header.should('have.text','MakeUp')
            
            
        })
        

        // cy.get('.maintext').text()
        // cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click()
        // cy.xpath("//*[text()='Makeup']").click()
        // cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1)').click()
        // cy.get('.productname').contains('Skinsheen Bronzer Stick')
        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        // cy.get('#ContactUsFrm_first_name').type('Hello world')
        // cy.get('#ContactUsFrm_first_name').type('Hello world')
        // cy.get('#ContactUsFrm_first_name').should('have.attr','name','first_name')

        // cy.get('#ContactUsFrm_email').type('Helloorld@gmail.com')
        // cy.get('#ContactUsFrm_enquiry').type('Hello world')
        // cy.xpath('//*[contains(@title,"Submit")]').click()
        // // cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        // cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')

    });

      


});
/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />


describe('Iterating thru list', () => {

    it.only('tesct 1', () => {
        
        cy.visit("https://www.automationteststore.com/")

        cy.get("a[href*='index.php?rt=product/category&path=']").contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // cy.log(`${index},${$el.text()}`)
            // cy.wrap($el).click()
            if($el.text().includes('Pantene Pro-V Conditioner, Classic Care')){
                cy.wrap($el).click()

            }
           
          })
        })

      


});
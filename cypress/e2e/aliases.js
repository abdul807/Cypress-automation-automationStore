/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />


describe('aliases', () => {

    it('tesct 1', () => {
        
        cy.visit("https://www.automationteststore.com/")

        cy.get("a[href*='index.php?rt=product/category&path=']").contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('thumbnail')
        cy.get('@thumbnail').its('length').should('be.gt',5)
        cy.get('@thumbnail').should('include','Seaweed Conditioner')

      
        })



      it('assigment- validate product thumbnail',()=>{
        cy.visit("https://www.automationteststore.com/")
        // cy.xpath("//div[@class = 'thumbnail']").its('length').should('eq',16) 
        cy.xpath("//div[@class = 'thumbnail']").should('have.length',16) 

        cy.xpath("//a[@class = 'productcart']").eq(0).should('have.attr','title','Add to Cart')
       


      })

      it.only('adding all',()=>{
        cy.visit("https://www.automationteststore.com/")
        cy.xpath("//div[@class = 'thumbnail']").as('Products')
        
        // cy.get('@Products').find('.oneprice').each(($el,index,$list)=>{
        //     cy.log($el.text())

        // });

        // cy.get('@Products').find('.pricenew').each(($el,index,$list)=>{
        //     cy.log($el.text())

        // });

        cy.get('@Products').find('.priceold').invoke('text').as('ItemPrice')
        cy.get('@ItemPrice').then(($linkText)=>{
            var sum = 0
            var ItemPrice = $linkText.split('$')
            for (let index = 0; index < ItemPrice.length; index++) {
                sum += Number(ItemPrice[index]);
                
            }
            cy.log(sum)
        })


      });




});
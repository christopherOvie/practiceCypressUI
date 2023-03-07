/// <reference types ="cypress" />

describe('handling tabs', () => {


    beforeEach(()=>{
        cy.visit('https://phptravels.net/login')
    })
    it('test tab using invoke and remove attr', function(){
//in cypress we can modify the dom but not selemnium,,delete the dom
        cy.get('#ACCOUNT')
        .trigger('mouseover')
       // .trigger()
        .trigger('click')
        //cy.wait('2000')
        //calling agent login
     cy.get('.b2b_agents')
     .first()
     .invoke('removeAttr','target')
     .click()
     .then(()=>{
        cy.contains('Please enter your account credentials below')
        .should('be.visible')
     })
    });

    it.only('test tab using invoke and href attr', function(){

        cy.get('#ACCOUNT')
        .trigger('mouseover')
       // .trigger()
        .trigger('click')
        //in cypress we can modify the dom but not selemnium,,delete the dom
                cy.get("[aria-labelledby='ACCOUNT'] li a")
                .eq(5)
               
          
              .then(($el)=>{
           const url=  $el.prop('href')
           cy.visit(url)
           cy.url().should("eq",'https://phptravels.net/api/supplier')
             })
            });

});
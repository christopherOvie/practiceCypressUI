/// <reference types ="cypress" />

describe('conditional checking', () => {
   it('test wikivoyage exist using length', function(){
    cy.visit('https://www.wikipedia.org/')
    //get whole dom and do the condition 
    cy.get("body").then((body)=>{
      //greater than 0 it means element exist
      if(
        body.find("[data-jsl10n='wikivoyage.name']",{timeout:10000})
        .length==1
        ) {

       cy.get("[data-jsl10n='wikivoyage.name']").click() 
       cy.url().should("include","https://www.wikivoyage.org/")
      }
      else{
        cy.get("[data-jsl10n='commons.name']").click()
        cy.url().should("include","https://commons.wikimedia.org/wiki/Main_Page")
      }

    })
        
 
  
    });
});
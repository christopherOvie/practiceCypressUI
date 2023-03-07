/// <reference types ="cypress" />

describe('window handling', () => {


   
    it('test new window or child window', function(){
        
          cy.visit('/browser-windows',{
           onBeforeLoad(win){
cy.stub(win,"open").as('childwindow')  //store the window with stub as child window  using alias
           } 
        });
       cy.get("#windowButton")
       .click()
       .then(()=>{
        //switch to the child window
        cy.window().its('open').should('be.calledOnce')
        cy.visit('https://demoqa.com/sample');
        
        cy.get('@childwindow').then(()=>{
          cy.contains('This is a sample page').should('be.visible')
        })// call child window reference
       })

       
     })
     //#messageWindowButton
     it('test new window or child window for dynamic url', function(){
     // cy.visit('https://demoqa.com/browser-windows',{
        cy.visit('/browser-windows',{
         onBeforeLoad(win){
cy.stub(win,"open").as('childwindow')  //store the window with stub as child window  using alias
         } 
      });
     cy.get("#windowButton")
     .click()
     .then(()=>{
      //switch to the child window
      cy.window().its('open').should('be.calledOnce')
      //make sure child window has the url then capture the url
      cy.get("@childwindow")
      .should('be.calledOnce',Cypress.sinon.match.string)
      .then((url)=>{
        cy.visit(url.args[0][0]);
        url.restore;

        cy.get("@childwindow").then(()=>{
          cy.contains('This is a sample page').should('be.visible')
        })//
      })
     })
    })



    it('test new window or child window for dynamic url', function(){
      // cy.visit('https://demoqa.com/browser-windows',{
         cy.visit('/browser-windows',{
          onBeforeLoad(win){
 cy.stub(win,"open").as('childwindow')  //store the window with stub as child window  using alias
          } 
       });
      cy.get("#messageWindowButton")
      .click()
      .then(()=>{
       //switch to the child window
       cy.window().its('open').should('be.calledOnce')
       //make sure child window has the url then capture the url
       cy.get("@childwindow")
       .should('be.calledOnce',Cypress.sinon.match.string)
       .then((url)=>{
         cy.visit(url.args[0][0]);
         url.restore;
 
         cy.get("@childwindow").then(()=>{
           cy.contains('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.')
           .should('be.visible')
         })//
       })
      })
     })
  })
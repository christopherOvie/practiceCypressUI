/// <reference types ="cypress" />

//var data=require ("../../fixtures/staging.json")
const data = require('../../fixtures/staging.json')
describe('handling each spec', () => {

  beforeEach(() => {
    cy.visit('https://phptravels.net/')
 });
 
   it('check dashboard list of elements', function(){

    cy.visit('https://phptravels.net/')
    //instead of hat=rdcoding fetch it dynamically using index
    //  cy.get("div h6").each(($el,index,$list)=>{
     
    //  const actualLabel = $el.text();
    //  expect(actualLabel).to.eq(data.airlines[index])
    // })

    cy.get("div h6").each(($el,index,$list)=>{

      cy.log("$el",$el);
      cy.log("index",index)
     
      const actualLabel = $el.text();
      expect(actualLabel).to.match(/[A-Za-z0-9]/)
     })


     
         })


         
});
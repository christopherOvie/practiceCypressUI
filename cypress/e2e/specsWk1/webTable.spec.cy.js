/// <reference types ="cypress" />

//var data=require ("../../fixtures/staging.json")
//const data = require('../../fixtures/staging.json')
describe('handling each spec', () => {

 //do data mapping
   it('check dashboard list of elements', function(){
  cy.visit("https://testautomationpractice.blogspot.com/")
//$el  jquery element reference  $list is to get labels only
     cy.get("[name='BookTable'] tbody tr td:nth-child(1)").each(($el,index,$list)=>{
      cy.log("ele",$el.text())
      if($el.text()=="Master In Java"){
        cy.get("[name='BookTable'] tbody tr td:nth-child(2)")
        .eq(index)
        .then(($el)=>{
          //expect($el.text()).to.eq("Amod")
          //for dynamic webpage
           expect($el.text()).to.match(/[A-Za-z0-9]/)
        })
        //check subject using dynamic function
        cy.get("[name='BookTable'] tbody tr td:nth-child(3)")
        .eq(index)
        .then(($el)=>{
          const actual=$el.text()
       const   expected= ["Java","JAVA"]
       expect(expected).to.include(actual)
        })
        //check price
        cy.get("[name='BookTable'] tbody tr td:nth-child(4)")
        //always pass index dynamivcally
        .eq(index)
        .then(($el)=>{
          const price=$el.text();
          const priceInt=parseInt(price)
          //sometimes use javascript predefined function to convert to
       expect(priceInt).to.eq(2000)
       //if you are facing dynamic table  cannot hardcode switch to regex
        })



      }
     })


     
         })        
});
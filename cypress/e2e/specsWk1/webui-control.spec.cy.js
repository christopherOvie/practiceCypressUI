/// <reference types ="cypress" />
describe('handlin web ui control', () => {

    beforeEach(() => {
        cy.visit('samplepagetest/')
     });
     
    it('test form submission', () => {
        
  cy.get("input[type='file']")
  .selectFile('cypress/fixtures/images.jpeg')
  cy.get('#g2599-name').clear().type('John Doe').should('have.value','John Doe') 
  cy.get('#g2599-email').clear().type('JohnDoe@yahoo.com')
  cy.get("#g2599-website").type('https://www.globalsqa.com/samplepagetest/')
  cy.get('#g2599-experienceinyears').select('7-10').should('have.value','7-10')
  cy.get("[name='g2599-expertise[]']").eq(1).should('not.be.checked').check()
  cy.get("[name='g2599-education']").eq(1).should('not.be.checked').check()

  //jquery checking for dynamic handling of webelement
  cy.get("[name='g2599-education']")
  .eq(1)
  .then(($el)=>{
    if($el.is(":checked")){
        cy.get("[name='g2599-expertise[]']").eq(1).uncheck()      
    }else{
        cy.get("[name='g2599-expertise[]']").eq(1).check()  
    }
  }) //alert
  cy.get("[onclick='myFunction()']") 
  .click() 
  .then(()=>{
    //on is event listener
    cy.on('window:alert',(win)=>()=>{
        expect(win).to.equal('Do you really fill rest of the form?')
        cy.on('window:confirm',()=>true);//true means click ok
        expect(win).to.equal('Good Luck. Go for it')
        cy.on('window:confirm',()=>true); //false means cancel
    })
  }) 
  cy.get("#contact-form-comment-g2599-comment")
  .clear()
  .type('test comment') 

  cy.get("[type='submit']").click().then(()=>{
    cy.contains('Message Sent (go back)').should('be.visible')
    cy.get("#contact-form-2599 blockquote p:nth-child(1)").should('have.text','Name: John Doe')
    //Name: john 
   //cy.get("body div blockquote p:nth-child(1)").include('John Doe')
   // cy.contains('John Doe').should('have.text','John Doe')
   //use jquery  element reference and can customise
   cy.get('body div blockquote p:nth-child(1)').then(($el)=>{
    //use jquery  element reference and can customise
   const text= $el.text();
  const upperCase= text.toUpperCase()
   expect(text).to.include('John Doe')
   });
    //method3  invoke is from jquery to fix text  //Jquery allow u to get element reference and can customise
   cy.get('body div blockquote p:nth-child(1)').invoke('text').then((text)=>{
     expect(text).to.include('John Doe')
    })
//method4  //have.text is for text say label but have .value is for input field or dropdown
    cy.get('body div blockquote p:nth-child(1)').then(($el)=>{
        //use jquery  element reference and can customise
       const text= $el.text();
      const getSubStr= text.substring(6,14)
       expect(getSubStr).to.eq("John Doe")
       });

  })
  
    });
});
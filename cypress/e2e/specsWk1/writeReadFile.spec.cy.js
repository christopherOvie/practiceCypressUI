
/// <reference types ="cypress" />

describe('write file usage', () => {
//can use direct function or third party plugin to upload files
    it('write data to json file', () => {

        cy.writeFile('cypress/fixtures/input.json',{
            name:"John Doe",
            "email":"johnDoe@yahoo.com",
            "phone":95432223
        })
});

it('fetch password from login page',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#password').then(($el)=>{
        const text = $el.text()
        cy.writeFile('cypress/fixtures/password.json',{password:text});
    })
})

//to read file use cy.readfile and give full path   filename with extension
it('read the password.json',()=>{
  cy.readFile('cypress/fixtures/password.json').then((data)=>{
    expect(data.password).to.equal("SuperSecretPassword!")
  })  


})

it.only('encoding the image',()=>{
    cy.readFile('cypress/fixtures/images.jpeg',"base64").then((image)=>{
      cy.log(image)
    })  
  
  })
});

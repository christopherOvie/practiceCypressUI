describe('Test suite -API Calls',()=>{

    before(()=>{  //Called only once and globally
cy.log('before hooks')
    })

    beforeEach(()=>{ //called after each test cae
        cy.log('beforeEach hooks')
    })
    it('test case  001',()=>{
cy.log('TC 001')
    })
    it('test case  002',()=>{
        cy.log('TC 002')
    })
    it('test case  003',()=>{
        cy.log('TC 003')
    })
       afterEach(()=>{    //executes after  test case completion
                cy.log('afterEach hooks')
            })

            after(()=>{//at end of test case completion
                cy.log('after hooks')
                    })
})


describe('Nested Test suite - UI Automation',()=>{

    before(()=>{  //Called only once and globally
cy.log('before hooks')
    })

    beforeEach(()=>{ //called after each test cae
        cy.log('beforeEach hooks')
    })
    it.skip('test case  001',()=>{
cy.log('TC 001')
    })
    it('test case  002',()=>{
        cy.log('TC 002')
    })
    it('test case  003',()=>{
        cy.log('TC 003')
    })
       afterEach(()=>{    //executes after  test case completion
                cy.log('afterEach hooks')
                //logout after each scenario
            })

            after(()=>{//at end of test case completion
                cy.log('after hooks')
                    })
})


describe('Nested Test suite - Database testing',()=>{

    before(()=>{  //Called only once and globally
cy.log('before hooks')
    })

    beforeEach(()=>{ //called after each test cae
        cy.log('beforeEach hooks')
    })
    it('test case  001',()=>{
cy.log('TC 001')
    })
    it('test case  002',async()=>{
      await  cy.log('TC 002')
      await  cy.log('TC 003')
      await  cy.log('TC 004')
    })
    it('test case  003',()=>{
        cy.log('TC 003')
    })
       afterEach(()=>{    //executes after  test case completion
                cy.log('afterEach hooks')
                //logout
            })

            after(()=>{//at end of test case completion
                cy.log('after hooks')
                //close database connection
                    })
})
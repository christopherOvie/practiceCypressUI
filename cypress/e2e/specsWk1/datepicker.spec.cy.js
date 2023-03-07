/// <reference types ="cypress" />
import { getTodayDate,getFutureDay } from "../../utils/helper";

describe('handling date picker', () => {

    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
     });
     
    it('directly input date format', () => {
cy.get('#datepicker')
.clear()//best practice
.type('02/26/2023{enter}')
.should('have.value','02/26/2023')

    });


    it('select the current system date', () => {
        cy.get('#datepicker')
        .click()//best practice
        .then(()=>{
            cy.get("[data-handler='selectDay']")
            .contains(getTodayDate()).click()
        })
        
            });


            it.only('select the future system date', () => {
                cy.get('#datepicker')
                .click()//best practice
                // .then(()=>{
                //     cy.get("[data-handler='selectDay']")
                //     .contains(getFutureDay(2)).click()
                // })
                cy.get("[data-handler='selectDay']").contains(getFutureDay(20)).click();    
                    });
      


});
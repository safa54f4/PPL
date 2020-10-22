/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('A.SAFA DHIATA')
        cy.get('[placeholder ="Email"][type="text"]').type('safadhi54@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('safadhi54@gmail.com')
        cy.get('#inputPassword2').type('SAFA')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('safadhi54@gmail.com')
        cy.get('#exampleInputPassword1').type('safa')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('A.SAFA DHIATA')
        cy.get('[placeholder="Subject"]').type('Tugas BlackBoxTesting')
        cy.get('[placeholder="Message"').type('Ayok ngerjakne ooook')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('Safa')
        cy.get('#inputLastName').type('Dhiata')
        cy.get('#inputEmail').type('safadhi54@gmail.com')
        cy.get('#inputWebsite').type('www.safadhi.com')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('safadhi54@gmail.com')
        cy.get('#inputPassword3').type('safa')
        cy.get('.custom-checkbox').last().click()
    })

});
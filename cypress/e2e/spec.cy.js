describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://actionurgentcare.com/')


    
    cy.contains('In-Clinic Care').trigger('mouseover')
    
    cy.contains('San Jose - Blossom Hill Rd.').click()

    cy.contains('Next').click()

    cy.contains('Previous').click()
 
    cy.wait(3000)
    
    cy.get('.MuiGrid-root').contains('12:30pm').click()
   
    cy.get('.MuiButton-root').contains('Select').click()


   })
})

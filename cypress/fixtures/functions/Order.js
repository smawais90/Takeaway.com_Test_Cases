const data = require('../../fixtures/data')
var el = require('../../fixtures/elements')
// var n = []; // storing three random numbers
 export var add_meals = (meal1,meal2,meal3) => {
    var meals = cy.get(el.meals)
    meals.eq(meal1).click()
    cy.get(el.address_field).type(data.address_main).should('have.value',data.address_main)
    cy.wait(5000)
    cy.get(el.confirmAddress).contains(data.address_main).click()
    cy.wait(2000)
    cy.get(el.addToBasket).click()

    cy.get(el.meals).eq(meal2).click()
    cy.get(el.addToBasket).click()
    
    cy.get(el.meals).eq(meal3).click()
    cy.get(el.addToBasket).click()
  }
  export var add_comment_in_order = (meal) => {
    cy.get(el.addNote).eq(meal).click().then(() => {
      cy.get(el.commentField1).type(data.comment).should('have.value',data.comment)
    })
    cy.get(el.addCommentBtn).click()
  }
  export var checkout = () => {
    cy.get(el.checkoutBtn).click()
    
    // populate address fields and validate missing fields
    cy.get(el.address.streetName).should('have.value', data.address.streetName)
    cy.get(el.address.houseNumber).should('have.value', data.address.houseNumber)
    cy.get(el.address.postCode).should('have.value', data.address.postCode)
    cy.get(el.address.city).should('have.value', data.address.city)
    cy.get(el.address.flatNumber).type(data.address.flatNumber).should('have.value', data.address.flatNumber)
    cy.get(el.address.floor).type(data.address.floor).should('have.value', data.address.floor)
    cy.get(el.address.accessCode).type(data.address.accessCode).should('have.value', data.address.accessCode)
    cy.get(el.address.companyName).type(data.address.companyName).should('have.value', data.address.companyName)
    cy.get(el.address.addNote).type(data.address.addNote).should('have.value', data.address.addNote)

    // Populate Persolnal Information

    cy.get(el.personalDetails.name).type(data.personalDetails.name).should('have.value', data.personalDetails.name)
    cy.get(el.personalDetails.email).type(data.personalDetails.email).should('have.value', data.personalDetails.email)
    cy.get(el.personalDetails.phoneNumber).type(data.personalDetails.phoneNumber).should('have.value', data.personalDetails.phoneNumber)
  }
 export var paypal_payment = () => {
   // setting up payment using paypal. 
   cy.get(el.paymentMethod.choose).click()
   cy.get(el.paymentMethod.paypal).click()
   cy.get(el.paymentMethod.confirmSelection).click()
   cy.get(el.paymentMethod.confirmOrder).click()
   cy.wait(5000)

   cy.url().should('contains', 'https://www.paypal.com/')
   //cancel paypal transaction
   cy.get(el.paymentMethod.cancelPaypal).click({force:true})
   cy.wait(10000)
}
export var cash_payment = () => {
  // cash Payment selection
  cy.get(el.paymentMethod.sidebarPaymentSelection).click()
  cy.get(el.paymentMethod.cash).click()
  cy.get(el.paymentMethod.confirmSelection).click()
  cy.get(el.paymentMethod.sidebarConfirmOrder).click()
  cy.wait(3000)
  cy.url().should('contains', data.confirmationText)
}
// to get three random numbers for selecting 3 random meals
// export function randomNum(min, max) {  
//   for(var i=0;i<3;i++){ 
//   n.push(Math.floor(Math.random() * max) + min); 
//   } 
//   return n; 
//   } 
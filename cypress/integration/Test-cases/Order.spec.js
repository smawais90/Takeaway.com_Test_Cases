import 'cypress-xpath';
const data = require('../../fixtures/data') // data elements will be kept here
var fn = require('../../fixtures/functions/Order') // if we had test ids it would have been get from here So just a structure
var el = require('../../fixtures/elements.json') // all the functions are being kept here

describe('Place Order of three meals', () => {
  beforeEach(() => {
    cy.viewport(1280,720) 
  })
  it('should order three meals successfully', () => {
  
      cy.visit('')
      // fn.randomNum(0,19) // we can use this function to add 3 meals randomly 
      fn.add_meals(7,8,9) // add any meals 
      fn.add_comment_in_order(1) // you can put the comment on any order by passing it in function parameter
      fn.checkout() // fill in checkout information
      fn.paypal_payment() // pay via paypal and cancel payment
      fn.cash_payment() // pay via cash 
  })
})


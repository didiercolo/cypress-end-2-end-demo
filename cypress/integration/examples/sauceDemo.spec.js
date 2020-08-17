/// <reference types="cypress" />
const loginInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton =  '#login-button';
const loginErrorMessage = '[data-test="error"]'

context('End 2 End - Sauce Demo', () => {
  before(() => {
    cy.visit('/')
  })

  // https://on.cypress.io/custom-commands

  it('Login - Invalid user', () => {
    cy.url().should('include', 'https://www.saucedemo.com/')
    cy.get(loginInput).type('sdf')
    cy.get(passwordInput).type('sd')
    cy.get(loginButton).click()
    cy.get(loginErrorMessage).should('be.visible')  
  })
})

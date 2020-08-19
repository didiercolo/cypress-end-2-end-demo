import {selectors } from '../selectors/login'

Cypress.Commands.add("login", () => { 

  cy.get(selectors.loginInput).clear().type('standard_user')
  cy.get(selectors.passwordInput).clear().type('secret_sauce')
  cy.get(selectors.loginButton).click()  
  })
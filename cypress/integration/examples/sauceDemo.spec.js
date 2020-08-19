/// <reference types="cypress" />

import {selectors as login}   from '../../selectors/login'
import {selectors as product}   from '../../selectors/products'

const loginInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton =  '#login-button';
const loginErrorMessage = '[data-test="error"]'

context('End 2 End - Sauce Demo', () => {
  before(() => {
    cy.viewport('macbook-15')
    cy.visit('/')
    cy.log('Starting Tests')
  })

  after(() => {
    cy.log('Finishing Tests')
  })

  it('Login - Invalid user', () => {
    cy.url().should('include', 'https://www.saucedemo.com/')
    cy.get(login.loginInput).type('sdf')
    cy.get(login.passwordInput).type('sd')
    cy.get(login.loginButton).click()
    cy.get(login.loginErrorMessage).should('be.visible')  
  })

  it('Login - Valid user', () => {
    cy.url().should('include', 'https://www.saucedemo.com/')
    
    // Custom Command - Check file /support/commands.js
    cy.login()  
  })

  it('Add product to Cart', () => {
    cy.viewport(1440, 1440)
    cy.get(product.addItemButton).should('be.visible') 
   
    cy.get(product.addItemButton).click()
    cy.get(product.itemAtShoppingCartIcon).should('be.visible') 
  })

  it('Continue to shopping Card', () => {
    cy.get(product.shoppingCartButton).should('be.visible') 
    cy.get(product.shoppingCartButton).click()
    cy.get('.checkout_button').should('be.visible')
  })

  it('Continue to checkout', () => {
    cy.get('.checkout_button').click()
    cy.get('.checkout_info_wrapper').should('be.visible')
  })

  it('Enter checkout info', () => {
    cy.get('#first-name').type('Automated')
    cy.get('#last-name').type('Automated')
    cy.get('#postal-code').type('33122')
    cy.get('.cart_button').click()
  })

  it('Finish order', () => {
    cy.get('.cart_button').click()
  })

})

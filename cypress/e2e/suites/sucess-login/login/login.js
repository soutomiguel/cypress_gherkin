import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given(`A user enter to the login page`, () => {
        cy.visit("/")
})
When(`A user enters the username {string}`, (username) => {
    cy.get("#user-name").type(username)
})
And(`A user enters the password {string}`, (password) => {
    cy.get("#password").type(password)
})
And(`A user clicks on the login button`, () => {
    cy.get("#login-button").click()
})
Then(`A user will be logged in`, () => {
    cy.url().should('contains', '/inventory.html')
})
/// <reference types = "Cypress" />

import {slowCypressDown} from 'cypress-slow-down'
slowCypressDown(500)

describe('SWITCH LANGUAGE', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit(Cypress.env("baseUrl"));
    });

    it('a. Switch language from ID to EN', () => {
        cy.get('[data-automation="Language"]').click()
        cy.get('a[href="/en"]').last().click()

        // Checking if the language switches to EN:
        // 1. Checking if the "Job Search" exist s
        cy.get('[data-title="Job search"]').first().should('exist').and('have.text', 'Job search')

        // 2. Checking if the "Profile" exists
        cy.get('[data-title="Profile"]').first().should('exist').and('have.text', 'Profile')

        // 3. Checking if the "Career advice" exists
        cy.get('[data-title="Career advice"]').first().should('exist').and('have.text', 'Career advice')

        // 4. Checking if the "Explore companies" exists
        cy.get('[data-title="Explore companies"]').first().should('exist').and('have.text', 'Explore companies')

        // 5. Checking if the "Register" exists
        cy.get('[data-automation="dashboardRegister"]').should('exist').and('have.text', 'Register')
    });
});
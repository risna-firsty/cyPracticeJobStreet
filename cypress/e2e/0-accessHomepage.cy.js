/// <reference types = "Cypress" />

import {slowCypressDown} from 'cypress-slow-down'
slowCypressDown(500)

describe('ACCESS HOMEPAGE', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit(Cypress.env("baseUrl"));
    });

    it('a. JobStreet logo exists', () => {
        // Checking logo
        cy.get('[class="_1iz8dgs4y kk5w089 _1mpv4c10"]').should('exist')
    });

    it('b. Each menu should exsist', () => {
        // Checking the Cari Lowongan menu
        cy.get('[data-title="Cari lowongan"]').first().should('exist').and('have.text', 'Cari lowongan')

        // Checking the Lihat profil menu
        cy.get('[data-title="Lihat profil"]').first().should('exist').and('have.text', 'Lihat profil')

        // Checking the Sumber daya karir menu
        cy.get('[data-title="Sumber daya karir"]').first().should('exist').and('have.text', 'Sumber daya karir')

        // Checking the Jelajahi perusahaan menu
        cy.get('[data-title="Jelajahi perusahaan"]').first().should('exist').and('have.text', 'Jelajahi perusahaan')
    });

    it('c. Sign out dashboard should exist', () => {
        cy.get('[data-automation="signedOutDashboard"]').should('exist')
        cy.get('[data-automation="dashboardSignIn"]').should('exist').and('have.text', 'Masuk')
        cy.get('[data-automation="dashboardRegister"]').should('exist').and('have.text', 'Daftar')
    });
});